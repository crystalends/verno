import Review from "@/app/_components/Reviews/Review";
import Block from "@/app/_components/shared/Block";
import BlockTitle from "@/app/_components/shared/BlockTitle";
import Breadcrumbs, { TBreadcrumb } from "@/app/_components/ui/breadcrumbs";

export default function Reviews() {
  const breadcrumbs: TBreadcrumb[] = [
    { value: "Главная", href: "/" },
    { value: "О компании", href: "/about-company" },
    { value: "Отзывы", href: "/about-company/reviews" },
  ];

  return (
    <div className="wrapper-narrow">
      <Block>
        <div className="flex flex-col gap-10">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <BlockTitle>Отзывы</BlockTitle>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <Review
                key={index}
                user={{
                  name: "Наталия",
                  endContent: (
                    <span className="text-[#656361] text-sm">18.08.24</span>
                  ),
                }}
                endContent={
                  <span className="text-[#A09790] font-circe text-sm">
                    Отзыв Яндекс.Карты
                  </span>
                }
                value="Cepгeй Влaдимиpoвич, Лилия! Гoвopим вaм oгpoмнoe CПACИБO зa нaшу кpacaвицу куxню oт VERNO! Вcё чёткo, кpacивo, функциoнaльнo! Oтдeльнoe cпacибo мacтepу пo cбopкe Cepгeю! Вы бoльшиe мoлoдцы! Уcпexoв и пpoцвeтaния вaшeй фиpмe! Вы oтличнaя кoмaндa!"
              />
            ))}
          </div>
        </div>
      </Block>
    </div>
  );
}
