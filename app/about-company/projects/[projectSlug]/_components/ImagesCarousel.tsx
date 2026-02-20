"use client";

import CarouselControlButton from "@/app/_components/Carousel/CarouselControlButton";
import MediaViewer from "@/app/_components/shared/Media/MediaViewer";
import { Button } from "@/app/_components/ui/button";
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
              className="basis-1/2 md:basis-1/3 xl:basis-1/4"
              onClick={() => setActiveImageViewerIndex(index)}
              key={index}
            >
              <Image
                src="/a13d8f678d77ec8fbfd19d11a22a2a53e97f15d3.webp"
                alt="Example image"
                className="object-cover rounded-[20px] h-55 w-full"
                width={340}
                height={220}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-between flex-wrap sm:flex-nowrap gap-2.5">
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
            <Progress
              className="w-25 h-px bg-[#F3EAE3]"
              value={progressValue}
            />
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
        <Button
          onClick={() => setActiveImageViewerIndex(0)}
          size="sm"
          className="sm:max-w-55"
        >
          Открыть галерею
        </Button>
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
