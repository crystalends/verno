import clsx from "clsx";
import { HTMLAttributes } from "react";

export type TStepProps = {
  headerTopContent?: React.ReactNode;
  title: string;
  bottomContent?: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default function Step({
  headerTopContent,
  title,
  children,
  bottomContent,
  className,
  ...props
}: TStepProps) {
  return (
    <div
      className={clsx(
        "p-5 rounded-[20px] bg-[#F3EAE3] h-full flex flex-col justify-between md:justify-start gap-5",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2.5">
          {headerTopContent}
          <h3 className="text-2xl">{title}</h3>
        </div>
        {children}
      </div>
      {bottomContent}
    </div>
  );
}
