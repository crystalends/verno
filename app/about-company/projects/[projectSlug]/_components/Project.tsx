"use client";

import CompletedProject from "@/app/_components/CompletedProject";
import OrderDesignProject from "@/app/_components/DesignProject/OrderDesignProject";
import OrderPriceCalculationModal from "@/app/_components/PriceCalculation/OrderPriceCalculationModal";
import Block from "@/app/_components/shared/Block";
import TitledCarousel from "@/app/_components/TitledCarousel";
import Breadcrumbs, { TBreadcrumb } from "@/app/_components/ui/breadcrumbs";
import { CarouselItem } from "@/app/_components/ui/carousel";
import About from "@/app/about-company/projects/[projectSlug]/_components/About";
import ImagesCarousel from "@/app/about-company/projects/[projectSlug]/_components/ImagesCarousel";
import Link from "next/link";

export default function Project() {
  const breadcrumbs: TBreadcrumb[] = [
    { value: "Главная", href: "/" },
    { value: "О компании", href: "/about-company" },
    { value: "Реализованные проекты", href: "/about-company/projects" },
    { value: "Кухня Миа", href: "/about-company/projects/lorem" },
  ];

  return (
    <div className="flex flex-col gap-2.5">
      <div className="wrapper-narrow">
        <Block>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </Block>
      </div>
      <div className="flex flex-col gap-7.5">
        <div className="w-full h-150 bg-center bg-cover bg-[url('/dabe3973eff3be65c3e98813174e4bf645cc5ec8.webp')] flex flex-col justify-end py-10">
          <div className="wrapper-narrow">
            <div className="p-5 md:p-10 bg-[#918A861A] backdrop-blur-2xl flex flex-col gap-2.5 w-full max-w-175 rounded-[20px]">
              <h1 className="text-4xl w-full md:text-5xl font-medium text-white leading-15">
                Кухня Миа
              </h1>
              <OrderPriceCalculationModal />
            </div>
          </div>
        </div>
        <div className="wrapper-narrow">
          <div className="flex flex-col gap-20">
            <ImagesCarousel />
            <About />
            <TitledCarousel
              carouselContentProps={{
                className: "gap-0",
              }}
            >
              {Array.from({ length: 9 }).map((_, index) => (
                <CarouselItem
                  className="basis-full sm:basis-1/2 xl:basis-1/3"
                  key={index}
                >
                  <CompletedProject
                    title={
                      <Link href="/about-company/projects/lorem">
                        Лaйт Kвaдpo + Mиa
                      </Link>
                    }
                    date="июнь 2024"
                    imageProps={{
                      alt: "Лaйт Kвaдpo + Mиa",
                      src: "/dabe3973eff3be65c3e98813174e4bf645cc5ec8.webp",
                    }}
                  />
                </CarouselItem>
              ))}
            </TitledCarousel>
            <OrderDesignProject
              className="bg-[#F0E2D7] md:p-15 p-6 rounded-md"
              imageWidth={660}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
