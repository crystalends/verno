import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import { HTMLAttributes } from "react";

type TFormWrapperProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  imageProps: Omit<ImageProps, "src"> & {
    src?: string;
  };
} & HTMLAttributes<HTMLDivElement>;

export default function FormWrapper({
  title,
  description,
  children,
  imageProps,
  ...props
}: TFormWrapperProps) {
  const {
    className: imagePropsClassName,
    alt,
    width = 470,
    height = 381,
    ...restImageProps
  } = imageProps;

  const { className, ...restProps } = props;

  return (
    <div className={clsx("flex gap-10", className)} {...restProps}>
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col gap-2.5">
          <h2 className="font-medium text-[32px]">{title}</h2>
          <p className="font-circe text-[18px] leading-5.5">{description}</p>
        </div>
        {children}
      </div>
      <Image
        src="/f968bc324648840635e2660cbee41955fec0e3fa.webp"
        className={clsx(
          "object-cover hidden xl:block rounded-[10px]",
          imagePropsClassName,
        )}
        alt={alt}
        width={width}
        height={height}
        {...restImageProps}
      />
    </div>
  );
}
