import clsx from "clsx";
import { HTMLProps } from "react";

export default function Description({
  className,
  ...props
}: HTMLProps<HTMLParagraphElement>) {
  return (
    <p
      className={clsx("text-[18px] leading-5.5 font-circe", className)}
      {...props}
    />
  );
}
