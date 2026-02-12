"use client";

import { Carousel, CarouselContent } from "@/app/_components/ui/carousel";
import { useCarouselControls } from "@/app/_hooks/useCarouselControls";
import CarouselControlButton from "@/app/kitchens/[kitchenSlug]/_components/CarouselControlButton";
import { ChevronLeft, ChevronRight } from "lucide-react";

type TMightAlsoLikeProps = {
  children: React.ReactNode;
};

export default function MightAlsoLike({ children }: TMightAlsoLikeProps) {
  const { setApi, canScrollPrev, canScrollNext, handlePrev, handleNext } =
    useCarouselControls();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between flex-wrap gap-2.5">
        <h2 className="font-medium text-[32px]">
          Вам так же может понравиться
        </h2>
        <div className="flex justify-end gap-2.5 w-full lg:w-fit">
          <CarouselControlButton onClick={handlePrev} disabled={!canScrollPrev}>
            <ChevronLeft className="h-4 w-4" />
          </CarouselControlButton>
          <CarouselControlButton onClick={handleNext} disabled={!canScrollNext}>
            <ChevronRight className="h-4 w-4" />
          </CarouselControlButton>
        </div>
      </div>
      <Carousel setApi={setApi} opts={{ align: "start", loop: false }}>
        <CarouselContent className="flex gap-5">{children}</CarouselContent>
      </Carousel>
    </div>
  );
}
