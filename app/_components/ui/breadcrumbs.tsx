import ArrowLeft from "@/app/_components/icons/ArrowLeft";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type TBreadcrumb = {
  value: string;
  href?: string;
};

type TBreadcrumbsProps = {
  breadcrumbs: TBreadcrumb[];
};

export default function Breadcrumbs({ breadcrumbs }: TBreadcrumbsProps) {
  return (
    <div className="flex gap-0.5 flex-wrap">
      {breadcrumbs.map(({ value, href }, index) => {
        const children = (
          <React.Fragment key={index}>
            {index > 0 ? "/ " : <ArrowLeft />}
            {value}
          </React.Fragment>
        );

        const className = clsx(
          "text-sm font-circe flex font-medium items-center",
          index == breadcrumbs.length - 1 && "text-[#A3ACAC]",
        );

        return (
          <React.Fragment key={index}>
            {href ? (
              <Link className={className} href={href}>
                {children}
              </Link>
            ) : (
              <span className={className}>{children}</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
