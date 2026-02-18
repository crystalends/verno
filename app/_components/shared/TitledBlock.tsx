import clsx from "clsx";
import { HTMLAttributes } from "react";

type TTitledBlockProps = {
  title: string;
} & HTMLAttributes<HTMLDivElement>;

export default function TitledBlock({
  title,
  children,
  className,
  ...props
}: TTitledBlockProps) {
  return (
    <div className={clsx("flex flex-col gap-5", className)} {...props}>
      <h2 className="text-[32px] font-medium leading-10">{title}</h2>
      {children}
    </div>
  );
}
