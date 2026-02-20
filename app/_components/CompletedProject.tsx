import Image, { ImageProps } from "next/image";

type TCompletedProjectProps = {
  title: React.ReactNode;
  date?: string;
  imageProps?: Omit<ImageProps, "width" | "height" | "fill">;
};

export default function CompletedProject({
  title,
  date,
  imageProps,
}: TCompletedProjectProps) {
  return (
    <div className="flex flex-col gap-2.5 relative">
      {date && (
        <span className="absolute left-2.5 top-2.5 p-1.25 rounded-[10px] backdrop-blur-[20px]">
          {date}
        </span>
      )}
      {imageProps && (
        <Image
          {...imageProps}
          className="rounded-[20px] w-full h-90 object-cover"
          width={390}
          height={360}
          alt={imageProps.alt}
        />
      )}
      <h4 className="font-medium text-[20px]">{title}</h4>
    </div>
  );
}
