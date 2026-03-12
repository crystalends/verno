"use client";

import { Button } from "@/app/_components/ui/button";
import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  Pagination as ShadcnUIPagination,
} from "@/app/_components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { ComponentProps, Suspense } from "react";

type TPagination = {
  page?: number;
  total: number;
  limit: number;
  param?: string;
  params?: Record<string, string | number | boolean | undefined>;
};

type TPaginationProps = ComponentProps<"nav"> & TPagination;

function PaginationInner({
  page,
  total,
  limit,
  param = "page",
  params,
  ...props
}: TPaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const totalPages = Math.max(1, Math.ceil(total / limit));
  const currentPage = Math.min(Math.max(Number(page) || 1, 1), totalPages);

  const canPrev = currentPage > 1;
  const canNext = currentPage < totalPages;

  const handlePageChange = (newPage: number) => {
    const nextPage = Math.min(Math.max(newPage, 1), totalPages);
    const newParams = new URLSearchParams(searchParams.toString());

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null)
          newParams.set(key, String(value));
        else newParams.delete(key);
      });
    }

    newParams.set(param, nextPage.toString());
    router.push(`?${newParams.toString()}`, { scroll: false });
  };

  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = [];
    const delta = 1;
    const left = currentPage - delta;
    const right = currentPage + delta;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i <= right)) {
        pages.push(i);
      } else if (
        (i === left - 1 && left > 2) ||
        (i === right + 1 && right < totalPages - 1)
      ) {
        pages.push("ellipsis");
      }
    }

    return pages;
  };

  return (
    <ShadcnUIPagination {...props}>
      <PaginationContent>
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap gap-10 items-center">
            <PaginationItem>
              <PaginationLink
                href="#"
                aria-label="Предыдущая страница"
                aria-disabled={!canPrev}
                tabIndex={canPrev ? 0 : -1}
                className={
                  !canPrev ? "pointer-events-none opacity-40" : undefined
                }
                onClick={(e) => {
                  e.preventDefault();
                  if (canPrev) handlePageChange(currentPage - 1);
                }}
              >
                <ChevronLeft className="h-4 w-4" />
              </PaginationLink>
            </PaginationItem>

            <div className="flex gap-2.5 items-center flex-wrap">
              {getPageNumbers().map((pageNum, idx) =>
                pageNum === "ellipsis" ? (
                  <PaginationItem key={`ellipsis-${idx}`}>
                    <PaginationEllipsis />
                  </PaginationItem>
                ) : (
                  <PaginationItem key={pageNum}>
                    <PaginationLink
                      href="#"
                      isActive={pageNum === currentPage}
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(pageNum);
                      }}
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                ),
              )}
            </div>

            <PaginationItem>
              <PaginationLink
                href="#"
                aria-label="Следующая страница"
                aria-disabled={!canNext}
                tabIndex={canNext ? 0 : -1}
                className={
                  !canNext ? "pointer-events-none opacity-40" : undefined
                }
                onClick={(e) => {
                  e.preventDefault();
                  if (canNext) handlePageChange(currentPage + 1);
                }}
              >
                <ChevronRight className="h-4 w-4" />
              </PaginationLink>
            </PaginationItem>
          </div>

          <Button
            variant="outline"
            className="w-fit xl:!min-w-55 mx-auto"
            size="lg"
            aria-disabled={!canNext}
            onClick={(e) => {
              e.preventDefault();
              if (canNext) handlePageChange(currentPage + 1);
            }}
          >
            Показать еще
          </Button>
        </div>
      </PaginationContent>
    </ShadcnUIPagination>
  );
}

export default function Pagination(props: TPaginationProps) {
  return (
    <Suspense fallback={null}>
      <PaginationInner {...props} />
    </Suspense>
  );
}
