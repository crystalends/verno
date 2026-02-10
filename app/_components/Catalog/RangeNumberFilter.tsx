"use client";

import React from "react";
import clsx from "clsx";
import { Slider } from "@/app/_components/ui/slider";

export type TPriceRange = [number, number];

type TRangeNumberFilterProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> & {
  value: TPriceRange;
  onChange: (next: TPriceRange) => void;

  min: number;
  max: number;
  step?: number;

  labelFrom?: string;
  labelTo?: string;

  inputProps?: Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "value" | "min" | "max" | "onChange" | "type"
  >;
};

function clamp(n: number, a: number, b: number) {
  return Math.min(Math.max(n, a), b);
}

function normalizeRange(
  from: number,
  to: number,
  min: number,
  max: number,
): TPriceRange {
  let a = clamp(from, min, max);
  let b = clamp(to, min, max);
  if (a > b) [a, b] = [b, a];
  return [a, b];
}

export function RangeNumberFilter({
  value,
  onChange,
  min,
  max,
  step = 1000,
  labelFrom = "от",
  labelTo = "до",
  inputProps,
  className,
  ...restProps
}: TRangeNumberFilterProps) {
  const { className: inputClassName, ...restInputProps } = inputProps || {};

  const finalInputClassName = `h-10 lg:min-w-[112px] rounded-[40px] bg-transparent pl-12 pr-5 text-[#656361] font-circe outline-none ${inputClassName}`;

  const range = normalizeRange(value[0], value[1], min, max);

  const setMin = (v: number) => {
    const nextMin = Number.isFinite(v) ? v : min;
    onChange(normalizeRange(nextMin, range[1], min, max));
  };

  const setMax = (v: number) => {
    const nextMax = Number.isFinite(v) ? v : max;
    onChange(normalizeRange(range[0], nextMax, min, max));
  };

  return (
    <div className={clsx("pt-3 flex flex-col gap-4", className)} {...restProps}>
      <Slider
        value={range}
        min={min}
        max={max}
        step={step}
        onValueChange={(v) => onChange(normalizeRange(v[0], v[1], min, max))}
      />

      <div className="flex justify-between gap-2">
        <label className="relative inline-flex items-center rounded-[40px] bg-[#F3EAE3]">
          <span className="absolute left-5 text-[#656361]">{labelFrom}</span>
          <input
            {...restInputProps}
            type="number"
            inputMode="numeric"
            className={finalInputClassName}
            value={range[0]}
            min={min}
            max={range[1]}
            onChange={(e) => setMin(Number(e.target.value))}
          />
        </label>

        <label className="relative inline-flex items-center rounded-[40px] bg-[#F3EAE3]">
          <span className="absolute left-5 text-[#656361]">{labelTo}</span>
          <input
            {...restInputProps}
            type="number"
            inputMode="numeric"
            className={finalInputClassName}
            value={range[1]}
            min={range[0]}
            max={max}
            onChange={(e) => setMax(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
}
