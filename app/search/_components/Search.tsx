import Price from "@/app/_components/Catalog/Price";
import FavoriteIcon from "@/app/_components/icons/FavoriteIcon";
import Block from "@/app/_components/shared/Block";
import BlockTitle from "@/app/_components/shared/BlockTitle";
import ProductCard from "@/app/_components/shared/ProductCard";
import { Badge } from "@/app/_components/ui/badge";
import Breadcrumbs, { TBreadcrumb } from "@/app/_components/ui/breadcrumbs";
import { Button } from "@/app/_components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Search() {
  const breadcrumbs: TBreadcrumb[] = [
    { value: "Главная", href: "/" },
    { value: "Поиск", href: "/search" },
  ];

  return (
    <div className="wrapper-narrow">
      <Block>
        <div className="flex flex-col gap-10">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <BlockTitle>Поиск</BlockTitle>
          <div className="flex flex-col gap-5">
            <div className="flex gap-2.5">
              <div className="relative h-8 w-full">
                <Image
                  src="/Vector.svg"
                  alt="Search"
                  style={{ position: "absolute", top: 9.33, left: 43.33 }}
                  width={13.333282470703125}
                  height={13.333282470703125}
                />
                <input
                  className="h-full pl-17.5 w-full border rounded-full"
                  placeholder="Поиск"
                />
              </div>
              <Button className="!min-w-48.25 w-fit" size="sm">
                Поиск
              </Button>
            </div>
            <p className="text-[18px] font-circe">Найдено: 23</p>
            <div className="flex flex-col gap-16.75">
              <div className="flex flex-col gap-2.5">
                <h2 className="text-[32px] font-medium">Каталог</h2>
                <div className="grid gap-x-5 gap-y-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                  {Array.from({ length: 9 }).map((_, index) => (
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
                          <Button
                            size="sm"
                            className="lg:w-fit lg:!min-w-48.25"
                          >
                            Заказать проект
                          </Button>
                        </div>
                      }
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <h2 className="text-[32px] font-medium">Статьи</h2>
                <div className="grid gap-x-5 gap-y-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                  {Array.from({ length: 3 }).map((_, index) => (
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
                          <Button
                            size="sm"
                            className="lg:w-fit lg:!min-w-48.25"
                          >
                            Заказать проект
                          </Button>
                        </div>
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Block>
    </div>
  );
}
