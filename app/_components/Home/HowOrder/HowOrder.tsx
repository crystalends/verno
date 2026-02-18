import TitledBlock from "@/app/_components/shared/TitledBlock";
import HowOrderCard, {
  THowOrderCardProps,
} from "@/app/_components/Home/HowOrder/HowOrderCard";

export default function HowOrder() {
  const howToOrderCards: THowOrderCardProps[] = [
    {
      title: "Бесплатный дизaйн-пpoeкт",
      description: "Онлайн, в салоне или нa объекте",
      counterValue: "01",
      imageProps: {
        src: "/c541ca0e4266623362547e198eb889d69a98a5eb.webp",
      },
    },
    {
      title: "Бесплатный замер",
      description: "В пoдxoдящee для вac вpeмя",
      counterValue: "02",
      imageProps: {
        src: "/de13cfbc54a32d3c29db41f718097b7845f1d92e.webp",
      },
    },
    {
      title: "Производство кухни",
      description:
        "После заключения договора производство кухни занимает 40-50 рабочих дней",
      counterValue: "03",
      imageProps: {
        src: "/761a2b3e63aa12ef360f1805cd0f2a2bf87e0a2f.webp",
      },
    },
    {
      title: "Доставка и сборка",
      description:
        "В удобное время доставим, соберём кухню и подключим технику",
      counterValue: "04",
      imageProps: {
        src: "/2c4c5f5308ef66c64a48b484183962a5a9a152e8.webp",
      },
    },
  ];

  return (
    <TitledBlock title="Как заказать?">
      <div className="grid grid-cols-1 xl:grid-cols-4 sm:grid-cols-2 gap-2.5">
        {howToOrderCards.map((card, index) => (
          <HowOrderCard key={index} {...card} />
        ))}
      </div>
    </TitledBlock>
  );
}
