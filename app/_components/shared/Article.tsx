import Image, { ImageProps } from "next/image";

type TArticleProps = {
  title: React.ReactNode;
  bottomContent?: React.ReactNode;
  imageProps?: Omit<ImageProps, "width" | "height" | "fill">;
};

export default function Article({
  title,
  bottomContent,
  imageProps,
}: TArticleProps) {
  return (
    <div className="flex flex-col gap-5">
      {imageProps && (
        <Image
          className="rounded-[20px] h-57.5 w-full object-cover"
          width={460}
          height={230}
          {...imageProps}
        />
      )}
      <div className="px-2.5 flex flex-col gap-5">
        <h3 className="text-2xl">{title}</h3>
        {bottomContent}
      </div>
    </div>
  );
}
