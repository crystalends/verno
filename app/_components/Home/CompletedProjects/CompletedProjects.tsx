"use client";

import CarouselControlButton from "@/app/_components/Carousel/CarouselControlButton";
import CompletedProject from "@/app/_components/Home/CompletedProjects/CompletedProject";
import { Button } from "@/app/_components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/_components/ui/carousel";
import { useCarouselControls } from "@/app/_hooks/useCarouselControls";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CompletedProjects() {
  const { setApi, canScrollPrev, canScrollNext, handlePrev, handleNext } =
    useCarouselControls();

  return (
    <div className="lg:rounded-[40px] py-3.75 lg:py-10 bg-[url('/e536e83e11e005a17b38c90a3c9ee27019bdc820.webp')] bg-center bg-cover mb-20">
      <div className="w-full max-w-385 mx-auto px-3.75 xl:px-5">
        <div className="bg-background rounded-[20px] flex flex-col max-w-220 gap-10 p-10">
          <div className="flex justify-between flex-wrap sm:flex-nowrap items-center gap-2.5">
            <h2 className="font-medium text-[32px]">Реализованные проекты</h2>

            <div className="flex justify-end w-full sm:w-fit gap-2.5">
              <CarouselControlButton
                onClick={handlePrev}
                disabled={!canScrollPrev}
              >
                <ChevronLeft className="h-4 w-4" />
              </CarouselControlButton>
              <CarouselControlButton
                onClick={handleNext}
                disabled={!canScrollNext}
              >
                <ChevronRight className="h-4 w-4" />
              </CarouselControlButton>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <Carousel setApi={setApi} opts={{ align: "start", loop: false }}>
              <CarouselContent>
                {Array(10)
                  .fill(null)
                  .map((_, i) => (
                    <CarouselItem className="basis-full md:basis-1/2" key={i}>
                      <CompletedProject
                        imageProps={{
                          src: "/e536e83e11e005a17b38c90a3c9ee27019bdc820.webp",
                        }}
                        date="июнь 2024"
                        title="Лaйт Kвaдpo + Mиa"
                      />
                    </CarouselItem>
                  ))}
              </CarouselContent>
            </Carousel>

            <Button className="w-fit">Больше проектов</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
