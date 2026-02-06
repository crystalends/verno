import OrderDesignProject from "@/app/_components/DesignProject/OrderDesignProject";
import About from "@/app/_components/Home/About/About";
import Block from "@/app/_components/Home/Block";
import CompletedProjects from "@/app/_components/Home/CompletedProjects/CompletedProjects";
import Facts from "@/app/_components/Home/Facts/Facts";
import CornersHouse from "@/app/_components/Home/HouseCorners";
import HowOrder from "@/app/_components/Home/HowOrder/HowOrder";
import OurShowrooms from "@/app/_components/Home/OurShowrooms/OurShowrooms";
import Reviews from "@/app/_components/Home/Reviews/Reviews";
import SpecialOffer from "@/app/_components/Home/SpecialOffer";
import { Button } from "@/app/_components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="h-174.75 bg-[url('/0903e0919ef1ddd1b08e82af6d6cee23aaeb37bc.webp')] bg-cover bg-center flex flex-col justify-end py-15 mb-10">
        <div className="wrapper-narrow">
          <div className="p-5 md:p-10 bg-[#918A861A] backdrop-blur-2xl max-w-165 w-full flex flex-col gap-5 rounded-[20px]">
            <h1 className="text-4xl w-full md:text-5xl font-medium text-white leading-15">
              Кухни под ваш стиль.
              <br /> Мебель под вашу жизнь
            </h1>
            <Button className="w-fit">Заказать дизайн-проект</Button>
          </div>
        </div>
      </div>
      <div className="wrapper-narrow">
        <div className="flex flex-col gap-20 mb-28.75">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <SpecialOffer
              title="Скидка до 25% на все кухни"
              rightContent={
                <span className="font-bold text-[128px] text-[#52AE84] absolute -right-5 -top-12">
                  25%
                </span>
              }
            />
            <SpecialOffer
              title="Oбeдeнный cтoл в пoдapoк пpи зaкaзe куxни"
              rightContent={
                <Image
                  src="/gift.svg"
                  width={170}
                  height={170}
                  alt="Gift"
                  className="absolute right-0 bottom-0"
                />
              }
            />
          </div>
          <Block title="Мебель для каждого уголка вашего дома">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-4">
              {Array(4)
                .fill(null)
                .map((_, i) => (
                  <Link key={i} href="/kitchens/dining">
                    <CornersHouse
                      imageProps={{
                        src: "/99aed708759487e2d3376592182658955a632b8a.webp",
                      }}
                      title="Гостиные"
                    />
                  </Link>
                ))}
            </div>
          </Block>
          <Facts />
        </div>
      </div>
      <CompletedProjects />
      <div className="wrapper-narrow">
        <div className="flex flex-col gap-20 mb-20">
          <HowOrder />
          <OrderDesignProject
            className="bg-[#F0E2D7] md:p-15 p-6 rounded-md"
            imageWidth={660}
          />
          <Reviews />
          <About />
        </div>
      </div>
      <OurShowrooms />
    </>
  );
}
