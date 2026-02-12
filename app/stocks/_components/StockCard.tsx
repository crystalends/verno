import Image, { ImageProps } from "next/image";

type TStockCardProps = {
  name: React.ReactNode;
  description?: string;
  topContent?: React.ReactNode;
  imageProps?: Omit<ImageProps, "width" | "height" | "fill">;
};

export default function StockCard({
  name,
  description,
  imageProps,
  topContent,
}: TStockCardProps) {
  return (
    <div className="flex w-full relative flex-col gap-5">
      {topContent}
      {imageProps && (
        <Image
          className="rounded-[20px] h-82.5 w-full object-cover"
          width={700}
          height={330}
          {...imageProps}
        />
      )}
      <div className="flex flex-col gap-5 px-2.5 pb-5">
        <div className="flex flex-col gap-2.5">
          <h3 className="text-2xl">{name}</h3>
          {description && (
            <p className="text-[#656361] font-circe text-[20px]">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
