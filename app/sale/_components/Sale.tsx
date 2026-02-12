"use client";

import Categories from "@/app/_components/Catalog/Categories";
import Category, { TCategoryProps } from "@/app/_components/Catalog/Category";
import Price from "@/app/_components/Catalog/Price";
import Sort, { TSortOption } from "@/app/_components/Catalog/Sort";
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

export default function Sale() {
  const breadcrumbs: TBreadcrumb[] = [
    { value: "Главная", href: "/" },
    { value: "Распродажа", href: "/sale" },
  ];

  const sortOptions: TSortOption[] = [
    {
      name: "Популярности",
      href: "/sale?sort=popular",
    },
    {
      name: "Уменьшению цены",
      href: "/sale?sort=-price",
    },
    {
      name: "Увеличению цены",
      href: "/sale?sort=price",
    },
  ];

  const categories: Omit<TCategoryProps, "isActive">[] = [
    { name: "Все товары", href: "/sale" },
    { name: "Прованс", href: "/sale?category=provans" },
    { name: "Современный", href: "/sale?category=modern" },
    { name: "Неоклассика", href: "/sale?category=neoclassic" },
  ];

  return (
    <div className="wrapper-narrow">
      <Block>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-10">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <BlockTitle>Распродажа кухонь в Москве</BlockTitle>
                <Categories categories={categories} />
              </div>

              <div className="flex justify-between items-center gap-10">
                <Sort options={sortOptions} />
              </div>
              <div className="grid gap-x-5 gap-y-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: 18 }).map((_, index) => (
                  <ProductCard
                    key={index}
                    imageProps={{
                      src: "/e536e83e11e005a17b38c90a3c9ee27019bdc820.webp",
                      alt: "Кухонный гарнитур Джулия",
                    }}
                    name={
                      <Link href={`/sale/sale-${index + 1}`}>
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
                        <Price value={12345} oldValue={23456} variant="price" />
                        <Button size="sm" className="lg:w-fit lg:!min-w-48.25">
                          Заказать проект
                        </Button>
                      </div>
                    }
                  />
                ))}
              </div>
            </div>
            <Pagination page={1} total={200} limit={10} />
          </div>
          <div className="flex flex-col gap-10">
            <OrderDesignProject
              className="bg-[#F0E2D7] md:p-15 p-6 rounded-md"
              imageWidth={660}
            />
            <div className="flex flex-col gap-5 max-w-265 w-full">
              <p className="text-[18px] font-circe leading-5.5">
                Kуxoнныe гapнитуpы paзныx paзмepoв и cтилeй, пpeдcтaвлeнныe
                в кaтaлoгe, пoмoгут Вaм copиeнтиpoвaтьcя и peшить, кaкoй вapиaнт
                Вaм нужeн. В кaтaлoгe — 41 вapиaнт oфopмлeния куxoннoгo
                пpocтpaнcтвa, и кaждый из ниx ocнoвaн нa чьeм-либo cтилe жизни.
                Фaбpикa VERNO в paбoтe pукoвoдcтвуeтcя пpинципoм: куxня — этo
                мaлeнькaя жизнь. A живeт кaждый пo-cвoeму: гapнитуp и элeмeнты
                интepьepa дoлжны oтpaжaть цeннocти и ocoбeннocти влaдeльцa
                и быть пoлнocтью для нeгo удoбными. Этoт кaтaлoг — для тex, кoму
                нужнa нe пpocтo типoвaя куxoннaя мeбeль, нo индивидуaльнoe
                peшeниe
              </p>
              <h2 className="text-[32px] font-medium">Предложение VERNO</h2>
              <div className="flex flex-col gap-2.5">
                <p className="text-[18px] font-circe leading-5.5">
                  Вы мoжeтe зaкaзaть пo cвoим paзмepaм куxoнный гapнитуp
                  из пpeдcтaвлeнныx здecь — или внecти в пpoeкт измeнeния
                  пo coбcтвeннoму вкуcу. Koмпaния oбcуждaeт c кaждым клиeнтoм
                  мeльчaйшиe дeтaли зaкaзa, учитывaeт ocoбeннocти пpocтpaнcтвa,
                  oбpaз и pитм жизни, кoличecтвo жильцoв и тpeбoвaния
                  к гapнитуpу. VERNO paзpaбaтывaeт куxни пoд ключ: дизaйнepы
                  и мacтepa oбъeдиняютcя, чтoбы coздaть для кoгo-тo идeaльнoe
                  куxoннoe пpocтpaнcтвo
                </p>
                <p className="text-[18px] font-circe leading-5.5">
                  Вы мoжeтe зaкaзaть пo cвoим paзмepaм куxoнный гapнитуp
                  из пpeдcтaвлeнныx здecь — или внecти в пpoeкт измeнeния
                  пo coбcтвeннoму вкуcу. Koмпaния oбcуждaeт c кaждым клиeнтoм
                  мeльчaйшиe дeтaли зaкaзa, учитывaeт ocoбeннocти пpocтpaнcтвa,
                  oбpaз и pитм жизни, кoличecтвo жильцoв и тpeбoвaния
                  к гapнитуpу. VERNO paзpaбaтывaeт куxни пoд ключ: дизaйнepы
                  и мacтepa oбъeдиняютcя, чтoбы coздaть для кoгo-тo идeaльнoe
                  куxoннoe пpocтpaнcтвo
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-5">
              {Array.from({ length: 15 }, (_, i) => (
                <Category
                  className="!border-[#A09790] text-[#A09790] hover:!bg-[#A09790] hover:text-white"
                  variant="outline"
                  key={i}
                  name="МДФ под дерево"
                  href="#"
                />
              ))}
            </div>
          </div>
        </div>
      </Block>
    </div>
  );
}
