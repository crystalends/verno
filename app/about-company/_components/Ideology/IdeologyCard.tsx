import clsx from "clsx";
import { HTMLAttributes } from "react";

type TIdeologyCardProps = {
  title: string;
  children: React.ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, "title">;

export default function IdeologyCard({
  title,
  children,
  className,
  ...props
}: TIdeologyCardProps) {
  return (
    <div
      className={clsx(
        "bg-[#F3EAE3] w-full rounded-[20px] p-5 flex flex-col gap-5",
        className,
      )}
      {...props}
    >
      <h3 className="text-2xl">{title}</h3>
      {children}
    </div>
  );
}
