"use client";

import * as React from "react";
import { Button } from "@/app/_components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import clsx from "clsx";

export default function FastSearch() {
  const [open, setOpen] = React.useState(false);
  const [q, setQ] = React.useState("");
  const router = useRouter();

  //rhf + zod сделать потом
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = q.trim();
    if (!query) return;

    router.push(`/search?q=${encodeURIComponent(query)}`);
    setOpen(false);
    setQ("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className={clsx(
        open && "border-b border-black flex gap-2.5 h-[44px] items-center",
      )}
    >
      <Button
        size="icon"
        variant="ghost"
        className="size-6 min-h-fit"
        type="button"
        onClick={() => setOpen(!open)}
      >
        <Image src="/search.svg" alt="Search" width={16} height={16} />
      </Button>

      {open && (
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Поиск по сайту"
          className="w-full bg-transparent outline-none font-circe text-[16px]"
        />
      )}
    </form>
  );
}
