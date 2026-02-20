export type TNavigationLink = {
  name: string;
  href: string;
};

export const navigationLinks = [
  {
    name: "Кухни",
    href: "/kitchens",
  },
  {
    name: "Мебель для дома",
    href: "/furniture",
  },
  {
    name: "Акции",
    href: "/stocks",
  },
  {
    name: "Покупателю",
    href: "/projects-3d",
  },
  { name: "Франшизы", href: "/franchises" },
  {
    name: "О компании",
    href: "/about-company",
  },
  { name: "Салоны", href: "/showrooms" },
];

export const forBuyersLinks: TNavigationLink[] = [
  { name: "3D проекты", href: "/projects-3d" },
  { name: "Рассрочка", href: "/credit" },
  { name: "Доставка", href: "/delivery" },
  { name: "Гарантия", href: "/guarantee" },
  { name: "Сборка и установка", href: "/installation" },
];
