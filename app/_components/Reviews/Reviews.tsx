import Block from "@/app/_components/Home/Block";
import Review from "@/app/_components/Reviews/Review";
import { Button } from "@/app/_components/ui/button";

export default function Reviews() {
  return (
    <Block title="Отзывы">
      <>
        <div className="flex gap-5 overflow-auto">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <Review
                key={i}
                user={{
                  name: "Наталия",
                  endContent: (
                    <span className="text-[#656361] text-[14px]">18.08.24</span>
                  ),
                }}
                endContent={
                  <span className="text-[#A09790] font-circe text-[14px]">
                    Отзыв Яндекс.Карты
                  </span>
                }
                value="Cepгeй Влaдимиpoвич, Лилия! Гoвopим вaм oгpoмнoe CПACИБO зa нaшу кpacaвицу куxню oт VERNO! Вcё чёткo, кpacивo, функциoнaльнo! Oтдeльнoe cпacибo мacтepу пo cбopкe Cepгeю! Вы бoльшиe мoлoдцы! Уcпexoв и пpoцвeтaния вaшeй фиpмe! Вы oтличнaя кoмaндa!"
              />
            ))}
        </div>
        <div className="flex gap-2.5 flex-wrap justify-end">
          <Button
            size="sm"
            variant="outline"
            className="min-h-fit max-w-55 w-full"
          >
            Оставить отзыв
          </Button>
          <Button size="sm" className="min-h-fit max-w-55 w-full">
            Все отзывы
          </Button>
        </div>
      </>
    </Block>
  );
}
