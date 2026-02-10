import clsx from "clsx";
import Image, { ImageProps } from "next/image";

export type THowOrderCardProps = {
  title: string;
  description: string;
  imageProps?: Omit<ImageProps, "width" | "height" | "alt" | "fill">;
  counterValue?: string;
};

export default function HowOrderCard({
  title,
  description,
  imageProps,
  counterValue,
}: THowOrderCardProps) {
  const { className, ...restImageProps } = imageProps || {};

  return (
    <div className="flex flex-col gap-2.5 relative overflow-hidden">
      {counterValue && (
        <span className="absolute top-2.5 left-2.5 px-1.5 pb-1 pt-1.5 bg-primary text-white font-circe rounded-[5px]">
          {counterValue}
        </span>
      )}
      {imageProps && (
        <Image
          {...restImageProps}
          src={imageProps.src}
          alt={title}
          className={clsx(
            "object-cover w-full h-57.5 rounded-[20px]",
            className,
          )}
          width={340}
          height={230}
        />
      )}
      <div className="flex flex-col gap-1.25">
        <h3 className="text-2xl">{title}</h3>
        <p className="font-light font-circe">{description}</p>
      </div>
    </div>
  );
}
