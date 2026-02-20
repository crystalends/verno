"use client";

import { Carousel, CarouselContent } from "@/app/_components/ui/carousel";
import { useCarouselControls } from "@/app/_hooks/useCarouselControls";
import CarouselControlButton from "@/app/_components/Carousel/CarouselControlButton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HTMLAttributes } from "react";
import clsx from "clsx";

type TTitledCarouselProps = {
  title?: string;
  children: React.ReactNode;
  carouselContentProps?: Omit<HTMLAttributes<HTMLDivElement>, "children">;
} & Omit<HTMLAttributes<HTMLDivElement>, "title">;

export default function TitledCarousel({
  title = "Вам так же может понравиться",
  children,
  className,
  carouselContentProps,
  ...props
}: TTitledCarouselProps) {
  const { setApi, canScrollPrev, canScrollNext, handlePrev, handleNext } =
    useCarouselControls();

  const { className: carouselContentClassName, ...restCarouselContentProps } =
    carouselContentProps || {};

  return (
    <div className={clsx("flex flex-col gap-5", className)} {...props}>
      <div className="flex justify-between flex-wrap gap-2.5">
        <h2 className="font-medium text-[32px]">{title}</h2>
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
        <CarouselContent
          className={clsx("flex gap-5", carouselContentClassName)}
          {...restCarouselContentProps}
        >
          {children}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
