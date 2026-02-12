import Block from "@/app/_components/shared/Block";
import BlockTitle from "@/app/_components/shared/BlockTitle";
import { Badge } from "@/app/_components/ui/badge";
import Breadcrumbs, { TBreadcrumb } from "@/app/_components/ui/breadcrumbs";
import StockCard from "@/app/stocks/_components/StockCard";
import Link from "next/link";

export default function Stocks() {
  const breadcrumbs: TBreadcrumb[] = [
    { value: "Главная", href: "/" },
    { value: "Акции", href: "/stocks" },
  ];

  return (
    <div className="wrapper-narrow">
      <Block>
        <div className="flex flex-col gap-10 mb-20">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <BlockTitle>Акции</BlockTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {Array.from({ length: 10 }, (_, index) => (
              <StockCard
                key={index}
                imageProps={{
                  src: "/e536e83e11e005a17b38c90a3c9ee27019bdc820.webp",
                  alt: "Oбeдeнный cтoл в пoдapoк пpи зaкaзe куxни",
                }}
                name={
                  <Link href={`/stocks/stock-${index + 1}`}>
                    Oбeдeнный cтoл в пoдapoк пpи зaкaзe куxни
                  </Link>
                }
                description="Эмаль"
                topContent={
                  <div className="absolute top-2.5 left-2.5 flex gap-2.5">
                    <Badge>Новинка</Badge>
                    <Badge>дo 31 дeкaбpя</Badge>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </Block>
    </div>
  );
}
