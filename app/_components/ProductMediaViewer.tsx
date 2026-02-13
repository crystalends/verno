"use client";

import MediaPreview from "@/app/_components/shared/Media/MediaPreview";
import MediaViewer from "@/app/_components/shared/Media/MediaViewer";
import ProductMediaCarousel from "@/app/_components/shared/Media/ProductMediaCarousel";
import { TMediaFile } from "@/app/_types/TMediaFile";
import { useState } from "react";

export default function ProductMediaViewer({
  mediaFiles,
}: {
  mediaFiles: TMediaFile[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-5 ">
      <div className="h-80 sm:h-162.5 overflow-hidden">
        <ProductMediaCarousel
          useControls={viewerIndex === null}
          active={{
            index: activeIndex,
            setIndex: setActiveIndex,
          }}
          onClick={(index, mediaFile) =>
            setViewerIndex(mediaFile.type == "image" ? index : null)
          }
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
      <MediaViewer
        mediaFiles={mediaFiles}
        active={{
          index: viewerIndex,
          setIndex: (index) => {
            setViewerIndex(index);

            if (typeof index === "number") {
              setActiveIndex(index);
            }
          },
        }}
      />
    </div>
  );
}
