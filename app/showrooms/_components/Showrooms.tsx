import OrderDesignProject from "@/app/_components/DesignProject/OrderDesignProject";
import Block from "@/app/_components/shared/Block";
import BlockTitle from "@/app/_components/shared/BlockTitle";
import Breadcrumbs, { TBreadcrumb } from "@/app/_components/ui/breadcrumbs";
import YandexMap from "@/app/_components/YandexMap";
import ShowroomsCarousel from "@/app/showrooms/_components/ShowroomsCarousel";

export default function Showrooms() {
  const breadcrumbs: TBreadcrumb[] = [
    { value: "Главная", href: "/" },
    { value: "Салоны", href: "/showrooms" },
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="wrapper-narrow">
        <Block title="Салоны">
          <div className="flex flex-col gap-10">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <BlockTitle>Салоны</BlockTitle>
            <ShowroomsCarousel />
          </div>
        </Block>
      </div>
      <YandexMap className="h-142.5 mb-10" />
      <div className="wrapper-narrow">
        <OrderDesignProject
          className="bg-[#F0E2D7] md:p-15 p-6 rounded-md mb-20"
          imageWidth={660}
        />
      </div>
    </div>
  );
}
