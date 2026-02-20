"use client";

import BackLink from "@/app/_components/BackLink";
import OrderDesignProject from "@/app/_components/DesignProject/OrderDesignProject";
import Block from "@/app/_components/shared/Block";
import BlockTitle from "@/app/_components/shared/BlockTitle";
import TitledCarousel from "@/app/_components/TitledCarousel";
import Breadcrumbs, { TBreadcrumb } from "@/app/_components/ui/breadcrumbs";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";
import ArticleCard from "@/app/_components/shared/Article";
import { CarouselItem } from "@/app/_components/ui/carousel";

export default function Article() {
  const breadcrumbs: TBreadcrumb[] = [
    { value: "Главная", href: "/" },
    { value: "О компании", href: "/about-company" },
    {
      value: "Советы по организации жилого пространства",
      href: "/about-company/articles",
    },
    {
      value: "Kуxни бeз pучeк нa фacaдax: ocoбeннocти и пpeимущecтвa",
      href: "/about-company/articles/lorem",
    },
  ];

  return (
    <div className="wrapper-narrow">
      <Block>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-24.25">
            <div className="flex flex-col gap-10">
              <Breadcrumbs breadcrumbs={breadcrumbs} />
              <BlockTitle>
                Kуxни бeз pучeк нa фacaдax: ocoбeннocти и пpeимущecтвa
              </BlockTitle>
              <BackLink href="/about-company/articles" />
            </div>
            <OrderDesignProject
              className="bg-[#F0E2D7] md:p-15 p-6 rounded-md"
              imageWidth={660}
            />
          </div>
          <TitledCarousel
            title="Вам так же может быть интересно"
            className="mb-20"
            carouselContentProps={{ className: "gap-0" }}
          >
            {Array.from({ length: 5 }, (_, index) => (
              <CarouselItem
                className="basis-full md:basis-1/2 xl:basis-1/3"
                key={index}
              >
                <ArticleCard
                  imageProps={{
                    src: "/dabe3973eff3be65c3e98813174e4bf645cc5ec8.webp",
                    alt: "Kуxни бeз pучeк нa фacaдax: ocoбeннocти и пpeимущecтвa",
                  }}
                  title={
                    <Link href="/about-company/articles/lorem">
                      Kуxни бeз pучeк нa фacaдax: ocoбeннocти и пpeимущecтвa
                    </Link>
                  }
                  bottomContent={
                    <Button className="md:max-w-48.25" size="lg" asChild>
                      <Link href="/about-company/articles/lorem">
                        Читать статью
                      </Link>
                    </Button>
                  }
                />
              </CarouselItem>
            ))}
          </TitledCarousel>
        </div>
      </Block>
    </div>
  );
}
