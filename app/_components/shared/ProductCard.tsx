import Image, { ImageProps } from "next/image";

type TProductCardProps = {
  name: string;
  description?: string;
  topContent?: React.ReactNode;
  bottomContent?: React.ReactNode;
  imageProps?: Omit<ImageProps, "width" | "height" | "fill" | "alt">;
};

export default function ProductCard({
  name,
  description,
  imageProps,
  topContent,
  bottomContent,
}: TProductCardProps) {
  return (
    <div className="flex w-full relative flex-col gap-5 border-b border-[#F0E2D7]">
      {topContent}
      {imageProps && (
        <Image
          className="rounded-[20px] h-90 w-full object-cover"
          width={460}
          height={360}
          alt={name}
          {...imageProps}
        />
      )}
      <div className="flex flex-col gap-5 px-2.5 pb-5">
        <div className="flex flex-col gap-2.5">
          <h3 className="text-2xl">{name}</h3>
          {description && (
            <p className="text-[#656361] font-circe text-[14px]">
              {description}
            </p>
          )}
        </div>
        {bottomContent}
      </div>
    </div>
  );
}
