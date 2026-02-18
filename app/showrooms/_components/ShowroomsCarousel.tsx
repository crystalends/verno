"use client";

import CarouselControlButton from "@/app/_components/Carousel/CarouselControlButton";
import OurShowroom from "@/app/_components/OurShowrooms/OurShowroom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/_components/ui/carousel";
import { Progress } from "@/app/_components/ui/progress";
import { useCarouselControls } from "@/app/_hooks/useCarouselControls";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ShowroomsCarousel() {
  const {
    setApi,
    canScrollPrev,
    canScrollNext,
    handlePrev,
    handleNext,
    activeIndex,
    totalSlides,
  } = useCarouselControls();

  const progressValue =
    totalSlides > 0 ? ((activeIndex + 1) / totalSlides) * 100 : 0;

  const carouselControlButtonClassName =
    "text-foreground border-foreground hover:bg-foreground";

  return (
    <div className="flex flex-col gap-5">
      <Carousel
        setApi={setApi}
        className="h-full"
        opts={{ align: "start", loop: false }}
      >
        <CarouselContent>
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <OurShowroom
                className="bg-white border border-[#656361]"
                imageProps={{
                  src: "/a13d8f678d77ec8fbfd19d11a22a2a53e97f15d3.webp",
                }}
                name="TЦ «ЭлитCтpoй мaтepиaлы»"
                address="Mocквa, TЦ «ЭлитCтpoй мaтepиaлы» MKAД 51 км, пoc. Зapeчьe, ул. Topгoвaя, cтp.2 , этaж 2, пaвильoн N-9"
                workingHours="пн-вc 10:00 - 20:00"
                phone="+7 (499) 841-84-10"
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
    </div>
  );
}
