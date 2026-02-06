import Image, { ImageProps } from "next/image";

type TNavigationMenuLinkItemProps = {
  name: string;
  imageProps?: Omit<ImageProps, "width" | "height">;
};

export default function NavigationMenuLinkItem({
  name,
  imageProps,
}: TNavigationMenuLinkItemProps) {
  return (
    <div className="flex gap-2.5 items-center">
      {imageProps && (
        <Image
          {...imageProps}
          alt={imageProps.alt}
          className="object-cover rounded-[5px] size-13.75"
          width={55}
          height={55}
        />
      )}
      <span className="font-circe text-xl">{name}</span>
    </div>
  );
}
