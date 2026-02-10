"use client";

import Category, { TCategoryProps } from "@/app/_components/Catalog/Category";
import { usePathname } from "next/navigation";

type TCategoriesProps = {
  categories: Omit<TCategoryProps, "isActive">[];
};

export default function Categories({ categories }: TCategoriesProps) {
  const pathname = usePathname();

  return (
    <div className="flex gap-5 overflow-auto">
      {categories.map((category, index) => (
        <Category
          key={index}
          isActive={category.href == pathname}
          {...category}
        />
      ))}
    </div>
  );
}
