import TitledBlock from "@/app/_components/shared/TitledBlock";
import Fact, { TFactProps } from "@/app/_components/Fact";
import { Button } from "@/app/_components/ui/button";
import Image from "next/image";

export default function Facts() {
  const facts: TFactProps[] = [
    {
      title: "Актуальный дизайн",
      description: "Трендовые фасады в стилях от ар-деко до прованса",
      icon: {
        slot: (
          <Image
            src="/dual-panel.svg"
            width={25}
            height={30}
            alt="Актуальный дизайн"
          />
        ),
      },
    },
    {
      title: "Уникальные технологии",
      description: "Инновационные материалы — основа качества VERNO",
      icon: {
        slot: (
          <Image
            src="/ornate-badge.svg"
            width={26}
            height={30}
            alt="Уникальные технологии"
          />
        ),
      },
    },
    {
      title: "Продуманные кухни",
      description: "Умный дизайн: эстетика + эргономика под ваши задачи",
      icon: {
        slot: (
          <Image
            src="/calendar-stats.svg"
            width={32.85}
            height={30}
            alt="Продуманные кухни"
          />
        ),
      },
    },
    {
      title: "Эксклюзивные модели фасадов",
      description: "ЭКО-массив — натуральность, экология, простота, цена",
      icon: {
        slot: (
          <Image
            src="/pos-terminal.svg"
            width={31.97}
            height={30}
            alt="Эксклюзивные модели фасадов"
          />
        ),
      },
    },
    {
      title: "Кухня под ключ",
      description: "Всё включено: техника, мебель, зоны",
      icon: {
        slot: (
          <Image
            src="/user-card.svg"
            width={32.85}
            height={30}
            alt="Кухня под ключ"
          />
        ),
      },
    },
  ];

  return (
    <TitledBlock title="ПочемуVERNO — это не просто мебель">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 xl:grid-cols-6">
        {facts.map((fact, index) => (
          <Fact
            key={index}
            title={fact.title}
            description={fact.description}
            icon={fact.icon}
          />
        ))}

        <div className="border-primary flex flex-col justify-end border rounded-[20px] p-5 sm:p-2.5 sm:min-h-59.75">
          <div className="flex flex-col gap-5">
            <h5 className="font-medium text-[18px] leading-5.5">
              Эксперты «Verno» рассказывают, как выбрать планировку
              под&nbsp;ваши&nbsp;задачи
            </h5>
            <Button size="sm">Читать статью</Button>
          </div>
        </div>
      </div>
    </TitledBlock>
  );
}
