import Price from "@/app/_components/Catalog/Price";
import OrderDesignProject from "@/app/_components/DesignProject/OrderDesignProject";
import FavoriteIcon from "@/app/_components/icons/FavoriteIcon";
import Pagination from "@/app/_components/Pagination";
import Block from "@/app/_components/shared/Block";
import BlockTitle from "@/app/_components/shared/BlockTitle";
import ProductCard from "@/app/_components/shared/ProductCard";
import { Badge } from "@/app/_components/ui/badge";
import Breadcrumbs, { TBreadcrumb } from "@/app/_components/ui/breadcrumbs";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";

export default function Favorites() {
  const breadcrumbs: TBreadcrumb[] = [
    { value: "Главная", href: "/" },
    { value: "Избранное", href: "/favorites" },
  ];

  return (
    <div className="wrapper-narrow">
      <Block>
        <div className="flex flex-col gap-10 mb-20">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <BlockTitle>Избранное</BlockTitle>
          <div className="grid gap-x-5 gap-y-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 18 }).map((_, index) => (
              <ProductCard
                key={index}
                imageProps={{
                  src: "/e536e83e11e005a17b38c90a3c9ee27019bdc820.webp",
                  alt: "Кухонный гарнитур Джулия",
                }}
                name={
                  <Link href={`/kitchens/kitchen-${index + 1}`}>
                    Кухонный гарнитур Джулия
                  </Link>
                }
                description="Эмаль"
                topContent={
                  <div className="absolute top-2.5 left-2.5 right-2.5">
                    <div className="flex gap-2.5">
                      <Badge>Новинка</Badge>
                      <Badge>Хит</Badge>
                    </div>
                    <Button
                      size="icon"
                      variant="outline"
                      className="min-h-fit right-0 absolute top-0 text-white backdrop-blur-[20px] h-[24px] w-[24px] border-white hover:border-primary [&_svg]:!w-[7px] [&_svg]:!h-[9.33px]"
                    >
                      <FavoriteIcon />
                    </Button>
                  </div>
                }
                bottomContent={
                  <div className="flex gap-2.5 flex-wrap justify-between">
                    <Price value={12345} />
                    <Button size="sm" className="lg:w-fit lg:!min-w-48.25">
                      Заказать проект
                    </Button>
                  </div>
                }
              />
            ))}
          </div>
          <Pagination page={1} total={200} limit={10} />
        </div>
        <OrderDesignProject
          className="bg-[#F0E2D7] md:p-15 p-6 rounded-md mb-20"
          imageWidth={660}
        />
      </Block>
    </div>
  );
}
