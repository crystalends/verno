"use client";

import CarouselControlButton from "@/app/_components/Carousel/CarouselControlButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/_components/ui/carousel";
import { useCarouselControls } from "@/app/_hooks/useCarouselControls";
import Block from "@/app/_components/shared/TitledBlock";
import Review from "@/app/franchises/_components/Reviews/Review";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Reviews() {
  const { setApi, canScrollPrev, canScrollNext, handlePrev, handleNext } =
    useCarouselControls();

  return (
    <Block title="Отзывы">
      <div className="flex flex-col gap-5">
        <Carousel
          setApi={setApi}
          className="h-full"
          opts={{ align: "start", loop: false }}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/2">
                <Review
                  value="Cepгeй Влaдимиpoвич,Лилия!Гoвopим вaм oгpoмнoe CПACИБO зa нaшу кpacaвицу куxню oт VERNO! Вcё чёткo, кpacивo, функциoнaльнo! Oтдeльнoe cпacибo мacтepу пo cбopкe Cepгeю! Вы бoльшиe мoлoдцы! Уcпexoв и пpoцвeтaния вaшeй фиpмe! Вы oтличнaя кoмaндa!"
                  name="Наталия Ивановна Иванова"
                  date="18.08.24"
                  city="Симферополь"
                  since="Студия с 2019 года"
                  imageProps={{
                    src: "/7272d0fa5a2aa750a8f4ff72254521b1e4f3bb0e.webp",
                  }}
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
      </div>
    </Block>
  );
}
