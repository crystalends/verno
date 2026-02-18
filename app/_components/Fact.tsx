import clsx from "clsx";
import { HTMLAttributes } from "react";

export type TFactProps = {
  title: React.ReactNode;
  description?: string;
  icon?: {
    slot: React.ReactNode;
    wrapperProps?: HTMLAttributes<HTMLDivElement>;
  };
} & Omit<HTMLAttributes<HTMLDivElement>, "title">;

export default function Fact({
  title,
  description,
  icon,
  className,
  ...props
}: TFactProps) {
  const { className: wrapperClassName, ...restWrapperProps } =
    icon?.wrapperProps || {};

  return (
    <div
      className={clsx(
        "flex flex-col gap-5 bg-[#F3EAE3] rounded-[20px] p-5 justify-between sm:min-h-60",
        className,
      )}
      {...props}
    >
      {icon && (
        <div
          className={clsx(
            "bg-primary flex justify-center items-center rounded-full size-13.75 overflow-hidden",
            wrapperClassName,
          )}
          {...restWrapperProps}
        >
          {icon.slot}
        </div>
      )}
      <div className="flex mt-auto flex-col gap-2.5">
        <h4
          className={clsx(
            "text-[20px] leading-6.25",
            description && "font-medium",
          )}
        >
          {title}
        </h4>
        {description && (
          <p className="font-circe font-light leading-4.75">{description}</p>
        )}
      </div>
    </div>
  );
}
