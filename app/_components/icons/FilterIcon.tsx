import React from "react";

type TFilterIconProps = React.SVGProps<SVGSVGElement>;

export default function FilterIcon({
  width = 17,
  height = 17,
  ...props
}: TFilterIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.75 3.56089C0.75 2.00848 2.00848 0.75 3.56089 0.75H12.5557C14.0827 0.75 15.3207 1.98793 15.3207 3.515C15.3207 4.32833 14.9626 5.1004 14.3417 5.62576L11.492 8.037C10.5832 8.80602 10.059 9.93618 10.059 11.1267V12.5681C10.059 13.2803 9.71825 13.9495 9.14227 14.3684L7.57085 15.5113C6.75348 16.1057 5.60688 15.5218 5.60688 14.5112V11.03C5.60688 9.89549 5.13072 8.81307 4.29441 8.04645L1.6615 5.63295C1.08069 5.10054 0.75 4.3488 0.75 3.56089Z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  );
}
