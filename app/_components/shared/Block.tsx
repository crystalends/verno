import clsx from "clsx";
import { HTMLAttributes } from "react";

export default function Block({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx("border-t border-accent", className)} {...props} />
  );
}
