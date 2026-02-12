"use client";

import ColorVariant from "@/app/_components/ColorVariant";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/_components/ui/carousel";
import { useCarouselControls } from "@/app/_hooks/useCarouselControls";
import CarouselControlButton from "@/app/kitchens/[kitchenSlug]/_components/CarouselControlButton";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ColorVariants() {
  const { setApi, canScrollPrev, canScrollNext, handlePrev, handleNext } =
    useCarouselControls();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between flex-wrap gap-2.5">
        <h2 className="font-medium text-[32px]">Вapиaнты цвeтoвыx peшeний</h2>
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
        <CarouselContent className="flex gap-5">
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <CarouselItem key={index} className="basis-55 shrink-0 grow-0">
                <ColorVariant
                  name="Мелисса с патиной серебро"
                  imageProps={{
                    src: "/c9b74c1982abe509fb3df5278c473ba9facd8b52.webp",
                  }}
                />
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
