import React, { HTMLAttributes } from "react";
import Image, { ImageProps } from "next/image";
import clsx from "clsx";
import InfoCard from "@/app/franchises/_components/Formats/InfoCard";

type TFormatProps = {
  imageProps: Omit<ImageProps, "width" | "height" | "fill" | "alt">;
  name: string;

  s: string;
  marginality: string;

  exhibitionTitle?: string;
  exhibitionItems: string[];

  investments: string;
  payback: string;

  endContent: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default function Format({
  imageProps,
  name,
  s,
  marginality,
  exhibitionTitle = "Комплектация выставки",
  exhibitionItems,
  investments,
  payback,
  endContent,
  ...props
}: TFormatProps) {
  const { className, ...restProps } = props;

  return (
    <div
      className={clsx(
        "bg-[#F3EAE3] rounded-[20px] p-5 flex flex-col gap-3.75",
        className,
      )}
      {...restProps}
    >
      <Image
        {...imageProps}
        alt={name}
        width={205}
        height={115}
        className="object-cover max-w-51.25 w-full rounded-[10px] h-28.75"
      />

      <h3 className="text-2xl">{name}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        <InfoCard label="S салона" value={s} />
        <InfoCard label="Маржинальность" value={marginality} />

        <div className="md:col-span-2">
          <InfoCard label={exhibitionTitle}>
            <div className="flex flex-col gap-1.25">
              {exhibitionItems.map((it, idx) => (
                <div key={idx}>{it}</div>
              ))}
            </div>
          </InfoCard>
        </div>

        <InfoCard label="Первичные инвестиции" value={investments} />
        <InfoCard label="Срок окупаемости" value={payback} />
      </div>

      {endContent}
    </div>
  );
}
