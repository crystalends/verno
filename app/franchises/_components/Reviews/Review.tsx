import Image, { ImageProps } from "next/image";

type TReviewProps = {
  imageProps?: Omit<
    ImageProps,
    "width" | "height" | "className" | "alt" | "fill"
  >;
  name: string;
  date: string;
  city: string;
  since: string;
  value: string;
};

export default function Review({
  imageProps,
  name,
  date,
  city,
  since,
  value,
}: TReviewProps) {
  return (
    <div className="rounded-[10px] p-5 flex flex-col gap-5 bg-[#F3EAE3]">
      <div className="flex gap-1.25">
        {imageProps && (
          <Image
            alt={name}
            width={102}
            height={108}
            className="object-cover w-25.5 h-27 rounded-[10px]"
            {...imageProps}
          />
        )}
        <div className="flex flex-col gap-1.25">
          <h5 className="text-lg font-medium">{name}</h5>
          {[date, city, since].map((item, index) => (
            <span key={index} className="font-circe text-[#656361] text-sm">
              {item}
            </span>
          ))}
        </div>
      </div>
      {value}
    </div>
  );
}
