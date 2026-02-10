"use client";

import MediaPreview from "@/app/_components/shared/Media/MediaPreview";
import ProductMediaCarousel from "@/app/_components/shared/Media/ProductMediaCarousel";
import { TMediaFile } from "@/app/_types/TMediaFile";
import { useState } from "react";

export default function ProductMediaViewer({
  mediaFiles,
}: {
  mediaFiles: TMediaFile[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-5 ">
      <div className="h-162.5 overflow-hidden">
        <ProductMediaCarousel
          active={{
            index: activeIndex,
            setIndex: setActiveIndex,
          }}
          mediaFiles={mediaFiles}
        />
      </div>
      <div className="flex overflow-auto gap-5">
        {mediaFiles.map(({ url, previewUrl, type }, index) => {
          return (
            <MediaPreview
              key={index}
              fill
              src={type === "video" ? previewUrl : url}
              alt="Lorem"
              isVideo={type === "video"}
              wrapperProps={{
                className:
                  "relative h-55 min-w-85 rounded-[20px] overflow-hidden w-full break-inside-avoid group",
                onClick: () => setActiveIndex(index),
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
