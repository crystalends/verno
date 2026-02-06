import Image, { ImageProps } from "next/image";

type TCornersHouseProps = {
  title: string;
  imageProps?: Omit<ImageProps, "width" | "alt" | "height">;
};

export default function CornersHouse({
  title,
  imageProps,
}: TCornersHouseProps) {
  return (
    <div className="flex flex-col gap-2.5">
      {imageProps && (
        <Image
          {...imageProps}
          alt={title}
          width={340}
          height={372}
          className="object-cover rounded-[20px] w-full h-60 sm:h-93"
        />
      )}
      <h3 className="text-2xl">{title}</h3>
    </div>
  );
}
