"use client";

import CarouselControlButton from "@/app/_components/Carousel/CarouselControlButton";
import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/_components/ui/carousel";
import { useCarouselControls } from "@/app/_hooks/useCarouselControls";
import Block from "@/app/_components/shared/TitledBlock";
import Step from "@/app/_components/shared/Step";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

type TStepData = {
  badge: string;
  title: string;
  actions: string[];
  bottomContent?: React.ReactNode;
};

const steps: TStepData[] = [
  {
    badge: "дни 1-2",
    title: "Знакомство",
    actions: [
      "Оставьте заявку",
      "Мы свяжемся с Вами и подробно расскажем об условиях сотрудничества",
      "Составим план нашего совместного бизнеса",
    ],
    bottomContent: (
      <Button size="lg" className="md:max-w-55">
        Оставить заявку
      </Button>
    ),
  },
  {
    badge: "дни 3-5",
    title: "Подготовка к открытию",
    actions: [
      "Помогаем в выборе помещения Вашего салона",
      "Просчитаем финансовую модель",
      "Помогаем выбрать систему налогообложения и ОКВЭД, дадим рекомендации по открытию расчетного счета и бухгалтерии",
      "Заключаем договор поставки",
      "Разрабатываем дизайн-проект салона",
    ],
  },
  {
    badge: "дни 6-20",
    title: "Подготовка к открытию",
    actions: [
      "Разрабатываем выставочные образцы с учетом особенностей конкурентного окружения и специфики региона",
    ],
  },
  {
    badge: "дни 20-22",
    title: "Подготовка к открытию",
    actions: [
      "После внесения Вами предоплаты 50%, мы запускаем образцы и рабочие места в производство",
    ],
  },
  {
    badge: "дни 23-59",
    title: "Подготовка к открытию",
    actions: [
      "Изготавливаем образцы и экспозиторы",
      "Вы готовите помещение и закупаете оборудование",
      "Комплектуем POS материалы, разрабатываем вывески",
    ],
  },
  {
    badge: "дни 23-59",
    title: "Работа с персоналом",
    actions: [
      "Помогаем нанять персонал (готовые вакансии, примеры профильных должностных инструкций)",
      "Обучаем персонал на фабрике",
    ],
  },
  {
    badge: "дни 60-69",
    title: "Подготовка к открытию",
    actions: [
      "После 100% оплаты, мы отправляем выставочные образцы в Ваш город",
    ],
  },
  {
    badge: "дни 70-74",
    title: "Подготовка к открытию",
    actions: [
      "Сборка образцов с участием специалиста фабрики",
      "Подготовка рекламной компании в вашем городе",
    ],
  },
  {
    badge: "дни 75-80",
    title: "Подготовка к открытию",
    actions: [
      "Размещаем информацию о салоне на официальном сайте",
      "Предоставляем доступы к корпоративным данным (CRM, личный кабинет на сайте)",
      "Организуем торжественное открытие с выездом специалистов фабрики",
    ],
  },
];

export default function StartWorkingWithUs() {
  const { setApi, canScrollPrev, canScrollNext, handlePrev, handleNext } =
    useCarouselControls();

  return (
    <Block title="Kaк нaчaть paбoту c нaми">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Image
          src="/7272d0fa5a2aa750a8f4ff72254521b1e4f3bb0e.webp"
          width={700}
          height={413}
          alt="Kaк нaчaть paбoту c нaми"
          className="rounded-[20px] object-cover w-full h-60 md:h-103.25"
        />

        <div className="flex flex-col h-full gap-5 md:gap-20">
          <Carousel
            setApi={setApi}
            className="h-full"
            opts={{ align: "start", loop: false }}
          >
            <CarouselContent className="flex gap-5">
              {steps.map((step, index) => (
                <CarouselItem key={index} className="basis-87 shrink-0 grow-0">
                  <Step
                    headerTopContent={
                      <Badge className="bg-[#F9F4F1] backdrop-blur-none text-foreground">
                        {step.badge}
                      </Badge>
                    }
                    title={step.title}
                    bottomContent={step.bottomContent}
                  >
                    <ul className="flex flex-col gap-1.25 text-[16px] leading-4.75 tracking-[-0.04em]">
                      {step.actions.map((action, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-[#656361] select-none">—</span>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </Step>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex gap-2.5">
            <CarouselControlButton
              onClick={handlePrev}
              disabled={!canScrollPrev}
            >
              <ChevronLeft className="h-4 w-4" />
            </CarouselControlButton>
            <CarouselControlButton
              onClick={handleNext}
              disabled={!canScrollNext}
            >
              <ChevronRight className="h-4 w-4" />
            </CarouselControlButton>
          </div>
        </div>
      </div>
    </Block>
  );
}
