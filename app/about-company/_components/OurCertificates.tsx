"use client";

import MediaViewer from "@/app/_components/shared/Media/MediaViewer";
import TitledCarousel from "@/app/_components/TitledCarousel";
import { CarouselItem } from "@/app/_components/ui/carousel";
import { useState } from "react";

export default function OurCertificates() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <TitledCarousel
        carouselContentProps={{
          className: "gap-0",
        }}
        className="mb-20"
        title="Наши сертификаты"
      >
        {Array.from({ length: 18 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="basis-full sm:basis-1/2 lg:basis-1/4 xl:basis-1/6"
          >
            <div
              onClick={() => setActiveIndex(index)}
              className="bg-[#F3EAE3] h-55 w-full p-5 rounded-[20px]"
            >
              <h3 className="text-2xl">Название сертификата</h3>
            </div>
          </CarouselItem>
        ))}
      </TitledCarousel>
      <MediaViewer
        active={{
          index: activeIndex,
          setIndex: setActiveIndex,
        }}
        mediaFiles={Array.from({ length: 18 }).map(() => ({
          url: `/192b56f214248f7bea69f839e0578c6a63e484b1.webp`,
          type: "image",
        }))}
      />
    </>
  );
}
