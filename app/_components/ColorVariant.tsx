import Image, { ImageProps } from "next/image";

type TColorVariantProps = {
  name: string;
  imageProps: Omit<ImageProps, "width" | "height" | "fill" | "alt">;
};

export default function ColorVariant({ name, imageProps }: TColorVariantProps) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="bg-white overflow-hidden py-7.5 rounded-[20px] w-55 h-50">
        <Image
          width={220}
          height={200}
          className="w-full h-full object-contain"
          alt={name}
          {...imageProps}
        />
      </div>
      <p className="font-circe">{name}</p>
    </div>
  );
}
