import ArrowLeft from "@/app/_components/icons/ArrowLeft";
import clsx from "clsx";
import Link, { LinkProps } from "next/link";

type TBackLinkProps = {
  className?: string;
  children?: React.ReactNode;
} & LinkProps;

export default function BackLink({
  children = "Вернуться назад",
  className,
  ...props
}: TBackLinkProps) {
  return (
    <Link
      className={clsx(
        "flex gap-0.5 items-center text-[#656361] flex-wrap",
        className,
      )}
      {...props}
    >
      <ArrowLeft />
      {children}
    </Link>
  );
}
