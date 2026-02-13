import clsx from "clsx";
import { HTMLProps } from "react";

export default function BlockTitle(props: HTMLProps<HTMLHeadingElement>) {
  const { className, ...restProps } = props;

  return (
    <h1
      className={clsx(
        "text-[32px] leading-15 sm:text-[48px] font-medium",
        className,
      )}
      {...restProps}
    />
  );
}
