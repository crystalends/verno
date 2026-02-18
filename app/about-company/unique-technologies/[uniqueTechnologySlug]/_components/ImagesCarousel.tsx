"use client";

import CarouselControlButton from "@/app/_components/Carousel/CarouselControlButton";
import MediaViewer from "@/app/_components/shared/Media/MediaViewer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/_components/ui/carousel";
import { Progress } from "@/app/_components/ui/progress";
import { useCarouselControls } from "@/app/_hooks/useCarouselControls";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ImagesCarousel() {
  const {
    setApi,
    canScrollPrev,
    canScrollNext,
    handlePrev,
    handleNext,
    totalSlides,
    activeIndex,
  } = useCarouselControls();

  const [activeImageViewerIndex, setActiveImageViewerIndex] = useState<
    number | null
  >(null);

  const progressValue =
    totalSlides > 0 ? ((activeIndex + 1) / totalSlides) * 100 : 0;

  const carouselControlButtonClassName =
    "text-foreground border-foreground hover:bg-foreground";

  return (
    <div className="flex flex-col gap-2.5">
      <Carousel setApi={setApi} opts={{ align: "start", loop: false }}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              className="basis-1/2 md:basis-1/3 xl:basis-full"
              onClick={() => setActiveImageViewerIndex(index)}
              key={index}
            >
              <Image
                src="/a13d8f678d77ec8fbfd19d11a22a2a53e97f15d3.webp"
                alt="Example image"
                className="object-cover h-115"
                width={580}
                height={460}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex gap-2.5">
        <CarouselControlButton
          className={carouselControlButtonClassName}
          onClick={handlePrev}
          disabled={!canScrollPrev}
        >
          <ChevronLeft className="h-4 w-4" />
        </CarouselControlButton>
        <div className="flex items-center gap-0.5">
          <span>1</span>
          <Progress className="w-25 h-px bg-[#F3EAE3]" value={progressValue} />
          <span>{totalSlides}</span>
        </div>
        <CarouselControlButton
          className={carouselControlButtonClassName}
          onClick={handleNext}
          disabled={!canScrollNext}
        >
          <ChevronRight className="h-4 w-4" />
        </CarouselControlButton>
      </div>
      <MediaViewer
        active={{
          index: activeImageViewerIndex,
          setIndex: setActiveImageViewerIndex,
        }}
        mediaFiles={Array.from({ length: 5 }).map((_, index) => ({
          id: index,
          url: `/a13d8f678d77ec8fbfd19d11a22a2a53e97f15d3.webp`,
          type: "image",
        }))}
      />
    </div>
  );
}
