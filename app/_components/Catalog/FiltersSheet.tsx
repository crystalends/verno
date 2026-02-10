"use client";

import React from "react";
import clsx from "clsx";
import FilterIcon from "@/app/_components/icons/FilterIcon";
import { Button } from "@/app/_components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion";
import { Checkbox } from "@/app/_components/ui/checkbox";
import { Label } from "@/app/_components/ui/label";
import { RangeNumberFilter } from "@/app/_components/Catalog/RangeNumberFilter";

export type TApiFilter =
  | {
      type: "range";
      key: "price";
      title: string;
      min: number;
      max: number;
      step?: number;
    }
  | {
      type: "multi";
      key: string;
      title: string;
      options: { id: string; label: string }[];
    };

export type TFiltersState = {
  price: [number, number];
  multi: Record<string, string[]>;
};

type TFiltersSheetProps = {
  filters: TApiFilter[];
  value: TFiltersState;
  onChange: (next: TFiltersState) => void;

  title?: React.ReactNode;
  defaultOpenKey?: string;

  onApply?: (value: TFiltersState) => void;
  onClear?: () => void;

  triggerSlot?: React.ReactNode;
};

export default function FiltersSheet({
  filters,
  value,
  onChange,
  title = "Фильтрация",
  defaultOpenKey,
  onApply,
  onClear,
  triggerSlot = (
    <Button
      size="lg"
      variant="outline"
      className="font-circe flex gap-3.75 items-center text-[18px] w-fit text-[#656361] border-[#656361] hover:bg-[#656361] !pl-7.5 !pr-[24.43px]"
    >
      Фильтр
      <FilterIcon />
    </Button>
  ),
}: TFiltersSheetProps) {
  const defaultValue =
    (defaultOpenKey ?? filters[0]?.key)
      ? [defaultOpenKey ?? filters[0]?.key]
      : [];

  const toggleMulti = (key: string, id: string) => {
    const current = value.multi[key] ?? [];
    const next = current.includes(id)
      ? current.filter((x) => x !== id)
      : [...current, id];

    onChange({
      ...value,
      multi: { ...value.multi, [key]: next },
    });
  };

  const setPrice = (next: [number, number]) => {
    onChange({ ...value, price: next });
  };

  const handleClear = () => {
    onClear?.();
  };

  const handleApply = () => {
    onApply?.(value);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{triggerSlot}</SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>

        <div className="overflow-auto px-5">
          <Accordion
            type="multiple"
            defaultValue={defaultValue}
            className="max-w-lg"
          >
            {filters.map((f) => (
              <AccordionItem key={f.key} value={f.key}>
                <AccordionTrigger>{f.title}</AccordionTrigger>
                <AccordionContent>
                  {f.type === "range" ? (
                    <RangeNumberFilter
                      value={value.price}
                      onChange={setPrice}
                      min={f.min}
                      max={f.max}
                      step={f.step ?? 1000}
                    />
                  ) : (
                    <div className="flex flex-col gap-3">
                      {f.options.map((opt) => {
                        const htmlId = `${f.key}-${opt.id}`;
                        const checked = (value.multi[f.key] ?? []).includes(
                          opt.id,
                        );

                        return (
                          <div key={opt.id} className="flex items-center gap-3">
                            <Checkbox
                              id={htmlId}
                              checked={checked}
                              onCheckedChange={() => toggleMulti(f.key, opt.id)}
                            />
                            <Label htmlFor={htmlId}>{opt.label}</Label>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <SheetFooter>
          <Button type="button" onClick={handleApply}>
            Применить
          </Button>
          <Button
            type="button"
            variant="outline"
            className={clsx(
              "text-[#656361] border-[#656361] hover:bg-[#656361]",
            )}
            onClick={handleClear}
          >
            Очистить
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
