import GoodIcon from "@/app/_components/icons/GoodIcon";
import { Button } from "@/app/_components/ui/button";
import Format from "@/app/franchises/_components/Formats/Format";

export default function Formats() {
  const formats = [
    {
      image: "/format-small.webp",
      name: "Стандартный",
      s: "35–45 м²",
      marginality: "35–37%",
      exhibitionItems: [
        "3 кухни",
        "1 обеденная группа",
        "1 гостиная / шкаф-купе",
      ],
      investments: "от 1700 тыс.руб",
      payback: "от 9–12 месяцев",
    },
    {
      image: "/format-medium.webp",
      name: "Оптимальный",
      s: "45–60 м²",
      marginality: "35–37%",
      exhibitionItems: [
        "4 кухни",
        "1 обеденная группа",
        "1 гостиная / шкаф-купе",
      ],
      investments: "от 2000 тыс.руб",
      payback: "от 11–14 месяцев",
    },
    {
      image: "/format-large.webp",
      name: "Максимальный",
      s: "60–80 м²",
      marginality: "35–37%",
      exhibitionItems: [
        "5–6 кухонь",
        "2 обеденные группы",
        "1 гостиная / шкаф-купе",
      ],
      investments: "от 2500 тыс.руб",
      payback: "от 12–18 месяцев",
    },
  ];

  return (
    <div className="py-10 bg-[url('/2ad7d91dd429f4d30784203412201bb60a92993c.webp')] sm:rounded-[40px] bg-center bg-cover">
      <div className="wrapper-narrow">
        <div className="flex flex-col gap-10 sm:gap-40">
          <div className="flex flex-wrap gap-2.5 justify-between">
            <h2 className="text-[32px] font-medium text-white">
              Форматы салонов
            </h2>

            <div className="flex gap-2.5 backdrop-blur-2xl p-5 rounded-[20px] bg-[#FFFFFF1A] sm:max-w-85">
              <GoodIcon className="text-white" width={40} />
              <p className="text-white font-circe text-[18px]">
                70% выручки приносят продажи кухонь с чеком 200–400 тыс. руб.
              </p>
            </div>
          </div>

          <div className="flex gap-5 overflow-x-auto">
            {formats.map((format) => (
              <Format
                key={format.name}
                className="sm:min-w-[460px]"
                imageProps={{
                  src: format.image,
                }}
                name={format.name}
                s={format.s}
                marginality={format.marginality}
                exhibitionItems={format.exhibitionItems}
                investments={format.investments}
                payback={format.payback}
                endContent={
                  <Button className="w-fit">Получить бизнес план</Button>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
