import clsx from "clsx";
import { HTMLAttributes } from "react";

export default function Block(props: HTMLAttributes<HTMLDivElement>) {
  const { className, ...restProps } = props;

  return (
    <div className={clsx("border-t border-accent", className)} {...restProps} />
  );
}
