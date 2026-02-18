"use client";

import VideoReview from "@/app/franchises/_components/VideoReviews/VideoReview";
import CarouselControlButton from "@/app/_components/Carousel/CarouselControlButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/_components/ui/carousel";
import { useCarouselControls } from "@/app/_hooks/useCarouselControls";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import MediaViewer from "@/app/_components/shared/Media/MediaViewer";

export default function VideoReviews() {
  const { setApi, canScrollPrev, canScrollNext, handlePrev, handleNext } =
    useCarouselControls();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-5">
      <Carousel
        setApi={setApi}
        className="h-full"
        opts={{ align: "start", loop: false }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 xl:basis-1/3"
            >
              <VideoReview
                key={index}
                wrapperProps={{
                  onClick: () => setActiveIndex(index),
                }}
                name="Наталия Ивановна Иванова"
                city="Симферополь"
                since="Студия с 2019 года"
                src="/e536e83e11e005a17b38c90a3c9ee27019bdc820.webp"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex gap-2.5">
        <CarouselControlButton onClick={handlePrev} disabled={!canScrollPrev}>
          <ChevronLeft className="h-4 w-4" />
        </CarouselControlButton>
        <CarouselControlButton onClick={handleNext} disabled={!canScrollNext}>
          <ChevronRight className="h-4 w-4" />
        </CarouselControlButton>
      </div>
      <MediaViewer
        active={{
          index: activeIndex,
          setIndex: setActiveIndex,
        }}
        mediaFiles={Array.from({ length: 5 }).map((_, index) => ({
          id: index,
          type: "video",
          url: `/video.mp4`,
        }))}
      />
    </div>
  );
}
