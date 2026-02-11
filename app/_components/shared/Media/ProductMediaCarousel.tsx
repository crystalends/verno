"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/_components/ui/carousel";

import MediaViewerSlideControl from "@/app/_components/shared/Media/MediaViewerSlideControl";
import { useCarouselControls } from "@/app/_hooks/useCarouselControls";
import { TMediaViewerFile } from "@/app/_components/shared/Media/MediaViewer";
import { useEffect } from "react";

type TProductMediaCarouselProps = {
  mediaFiles: TMediaViewerFile[];

  active?: {
    index: number | null;
    setIndex: (index: number | null) => void;
  };

  useControls?: boolean;

  controls?: {
    props?: Omit<
      React.ComponentProps<"button">,
      "onClick" | "disabled" | "children"
    >;
    leftSlot?: React.ReactNode;
    rightSlot?: React.ReactNode;
  };
};

export default function ProductMediaCarousel({
  mediaFiles,
  active,
  useControls = true,
  controls,
}: TProductMediaCarouselProps) {
  const setExternalIndex = active?.setIndex;

  const {
    activeIndex,
    setApi,
    scrollTo,
    handlePrev,
    handleNext,
    canScrollNext,
    canScrollPrev,
  } = useCarouselControls(active?.index, (index) => setExternalIndex?.(index));

  useEffect(() => {
    if (typeof active?.index === "number") {
      scrollTo(active.index);
    }
  }, [active?.index, scrollTo]);

  useEffect(() => {
    if (!useControls) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (active?.index === null) return;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        if (canScrollNext) handleNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (canScrollPrev) handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    active?.index,
    canScrollNext,
    canScrollPrev,
    handleNext,
    handlePrev,
    useControls,
  ]);

  const { className: controlsClassName, ...restControlsProps } =
    controls?.props || {};

  const {
    leftSlot: controlLeftSlot = (
      <ChevronLeft className="text-[#FFFFFF66] transition-colors group-hover:text-foreground" />
    ),
    rightSlot: controlRightSlot = (
      <ChevronRight className="text-[#FFFFFF66] transition-colors group-hover:text-foreground" />
    ),
  } = controls || {};

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "center", loop: false, containScroll: false }}
      className="w-full"
    >
      <CarouselContent>
        {mediaFiles.map(({ url, alt, type }, index) => {
          const isActive = index === activeIndex;

          return (
            <CarouselItem
              key={index}
              className="basis-full flex items-center justify-center"
            >
              <div className="relative w-full flex items-center justify-center transition-all duration-500 ease-out">
                <div className="relative w-full h-162.5 overflow-hidden rounded-[20px]">
                  {type === "image" ? (
                    <img
                      src={url}
                      alt={alt}
                      className="block w-full h-full object-cover pointer-events-none"
                    />
                  ) : (
                    <video
                      src={url}
                      controls={isActive}
                      autoPlay={isActive}
                      muted
                      playsInline
                      className="block w-full h-full object-cover"
                    />
                  )}

                  {useControls && (
                    <div className="flex z-10 justify-between gap-2 absolute top-1/2 left-2.5 right-2.5 -translate-y-1/2">
                      <MediaViewerSlideControl
                        onClick={handlePrev}
                        disabled={!canScrollPrev}
                        className={controlsClassName}
                        {...restControlsProps}
                      >
                        {controlLeftSlot}
                      </MediaViewerSlideControl>

                      <MediaViewerSlideControl
                        onClick={handleNext}
                        disabled={!canScrollNext}
                        className={controlsClassName}
                        {...restControlsProps}
                      >
                        {controlRightSlot}
                      </MediaViewerSlideControl>
                    </div>
                  )}
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
