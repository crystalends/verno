import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";

type TOurShowroomProps = {
  name: string;
  address: string;
  workingHours: string;
  phone: string;
  imageProps?: Omit<ImageProps, "width" | "height" | "fill" | "alt">;
} & HTMLAttributes<HTMLDivElement>;

export default function OurShowroom({
  name,
  address,
  workingHours,
  phone,
  imageProps,
  ...props
}: TOurShowroomProps) {
  const { className, ...restProps } = props;

  return (
    <div
      className={clsx(
        "flex flex-col p-5 rounded-[10px] min-w-[340px] justify-between bg-background",
        imageProps ? "gap-5" : "gap-10",
        className,
      )}
      {...restProps}
    >
      <div className={clsx("flex flex-col", imageProps ? "gap-5" : "gap-2.5")}>
        {imageProps && (
          <Image
            {...imageProps}
            className={clsx("rounded-[5px] object-cover", imageProps.className)}
            height={162}
            width={300}
            alt={name}
          />
        )}
        <h5 className="text-[18px] font-medium">{name}</h5>
        <div className="flex flex-col gap-2.5">
          <p className="font-circe text-[16px] leading-4.75">{address}</p>
          <span className="font-circe text-[16px]">{workingHours}</span>
        </div>
      </div>

      <div className="flex items-center gap-1.25">
        <Image src="/Frame 23.svg" alt="Call" width={34} height={34} />
        <Link className="font-circe text-[18px]" href={`tel:${phone}`}>
          {phone}
        </Link>
      </div>
    </div>
  );
}
