import clsx from "clsx";
import { HTMLProps, ReactNode } from "react";

type Props = HTMLProps<HTMLLIElement> & {
  children: ReactNode;
  marker?: ReactNode;
};

export function ListItem({
  children,
  className,
  marker = "—",
  ...props
}: Props) {
  return (
    <li className={clsx("flex gap-3 font-circe", className)} {...props}>
      <span className="text-[#656361] select-none">{marker}</span>
      <span>{children}</span>
    </li>
  );
}
