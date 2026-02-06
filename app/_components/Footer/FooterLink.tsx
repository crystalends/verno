import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { HTMLAttributes } from "react";

export default function FooterLink(
  props: HTMLAttributes<HTMLAnchorElement> & LinkProps,
) {
  const { className, ...restProps } = props;

  return (
    <Link
      {...restProps}
      className={clsx("text-[#656361] font-circe text-[18px]", className)}
    />
  );
}
