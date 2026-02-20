import { TNavigationLink } from "@/app/_data/navigationLinks";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import Link from "next/link";

export type TCategoryProps = {
  variant?: "default" | "outline";
  isActive?: boolean;
} & React.HTMLAttributes<HTMLSpanElement> &
  TNavigationLink;

const categoryVariants = cva(
  "font-circe rounded-[40px] text-[18px] transition-all px-7.5 text-nowrap h-11 inline-flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-[#F3EAE3] hover:bg-[#F0E2D7]",
        outline: "border border-[#DAC0AC] bg-transparent hover:bg-[#F0E2D7]",
      },
      isActive: {
        true: "",
        false: "cursor-pointer",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        isActive: true,
        className: "bg-[#F0E2D7] border border-[#DAC0AC]",
      },
      {
        variant: "outline",
        isActive: true,
        className: "bg-[#F0E2D7]",
      },
    ],
    defaultVariants: {
      variant: "default",
      isActive: false,
    },
  },
);

export default function Category({
  name,
  href,
  variant = "default",
  isActive = false,
  ...props
}: TCategoryProps) {
  const { className, ...restProps } = props;

  return (
    <span
      className={categoryVariants({ variant, isActive, className })}
      {...restProps}
    >
      {href ? (
        <Link
          className={clsx("cursor-inherit", isActive && "pointer-events-none")}
          href={href}
        >
          {name}
        </Link>
      ) : (
        name
      )}
    </span>
  );
}
