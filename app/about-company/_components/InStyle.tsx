import Fact, { TFactProps } from "@/app/_components/Fact";
import { Button } from "@/app/_components/ui/button";

const facts: TFactProps[] = [
  {
    title: "Гарантия до 20 лет",
    description: "Мы уверены в качестве и надежности мебели",
  },
  {
    title: "Более 1 200 видов фасадов",
    description: "Многообразие цветов, фактур и материалов",
  },
  {
    title: "Европейская фурнитура",
    description:
      "Механизмы Hettich гарантируют более 80 тысяч открываний/закрываний плавно и бесшумно",
  },
  {
    title: "Интерьер «под ключ»",
    description:
      "Мебель для ванных и гостиных, а также аксессуары в едином стиле",
  },
  {
    title: "Тренды и новинки",
    description:
      "Самое актуальное из представленного на мировых выставках находит отражение в нашем дизайне",
  },
];

export default function InStyle() {
  return (
    <div className="py-6 sm:py-15 bg-[url('/192b56f214248f7bea69f839e0578c6a63e484b1.webp')] sm:rounded-[40px] bg-center bg-cover">
      <div className="wrapper-narrow">
        <div className="flex flex-col gap-10 sm:gap-40">
          <h2 className="text-[32px] font-medium text-white">
            Кухни в #встилеверно – это:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {facts.map((fact, index) => (
              <Fact
                key={index}
                className="min-w-[320px] bg-[#F9F4F1] sm:!min-h-[166px]"
                {...fact}
              />
            ))}
            <div className="backdrop-blur-[20px] rounded-[20px] p-5 flex flex-col justify-between gap-2.5">
              <h6 className="text-[18px] text-white">
                Кухни, в которых всё продумано — для вашего удобства, стиля и
                бюджета
              </h6>
              <Button size="lg" className="max-w-55">
                В каталог
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
