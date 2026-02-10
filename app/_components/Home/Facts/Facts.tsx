import Block from "@/app/_components/Home/Block";
import Fact, { TFactProps } from "@/app/_components/Home/Facts/Fact";
import { Button } from "@/app/_components/ui/button";
import Image from "next/image";

export default function Facts() {
  const facts: TFactProps[] = [
    {
      title: "Актуальный дизайн",
      description: "Трендовые фасады в стилях от ар-деко до прованса",
      iconSlot: (
        <Image
          src="/Vector (2).svg"
          width={25}
          height={30}
          alt="Актуальный дизайн"
        />
      ),
    },
    {
      title: "Уникальные технологии",
      description: "Инновационные материалы — основа качества VERNO",
      iconSlot: (
        <Image
          src="/Vector-1.svg"
          width={26}
          height={30}
          alt="Уникальные технологии"
        />
      ),
    },
    {
      title: "Продуманные кухни",
      description: "Умный дизайн: эстетика + эргономика под ваши задачи",
      iconSlot: (
        <Image
          src="/Vector-2.svg"
          width={32.85}
          height={30}
          alt="Продуманные кухни"
        />
      ),
    },
    {
      title: "Эксклюзивные модели фасадов",
      description: "ЭКО-массив — натуральность, экология, простота, цена",
      iconSlot: (
        <Image
          src="/Group 10.svg"
          width={31.97}
          height={30}
          alt="Эксклюзивные модели фасадов"
        />
      ),
    },
    {
      title: "Кухня под ключ",
      description: "Всё включено: техника, мебель, зоны",
      iconSlot: (
        <Image
          src="/Vector-3.svg"
          width={32.85}
          height={30}
          alt="Кухня под ключ"
        />
      ),
    },
  ];

  return (
    <Block title="ПочемуVERNO — это не просто мебель">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 xl:grid-cols-6">
        {facts.map((fact, index) => (
          <Fact
            key={index}
            iconSlot={fact.iconSlot}
            title={fact.title}
            description={fact.description}
          />
        ))}
        <div className="border-primary flex flex-col justify-end border rounded-[20px] p-5 sm:p-2.5 sm:min-h-59.75">
          <div className="flex flex-col gap-5">
            <h5 className="font-medium text-[18px] leading-5.5">
              Эксперты «Verno» рассказывают, как выбрать планировку
              под ваши задачи
            </h5>
            <Button size="sm">Читать статью</Button>
          </div>
        </div>
      </div>
    </Block>
  );
}
