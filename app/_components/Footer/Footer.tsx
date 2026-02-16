import FooterLink from "@/app/_components/Footer/FooterLink";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { navigationLinks } from "@/app/_data/navigationLinks";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerData = [
  {
    title: "По стилю",
    links: [
      { name: "Классика", href: "/classic" },
      { name: "Неоклассика", href: "/neoclassic" },
      { name: "Лофт", href: "/loft" },
      { name: "Прованс", href: "/provence" },
      { name: "Современный", href: "/modern" },
      { name: "Скандинавский", href: "/scandinavian" },
    ],
  },
  {
    title: "По форме",
    links: [
      { name: "Прямые", href: "/straight" },
      { name: "Г-образные", href: "/l-shaped" },
      { name: "П-образные", href: "/u-shaped" },
      { name: "Угловые", href: "/corner" },
      { name: "С барной стойкой", href: "/with-bar" },
      { name: "С островом", href: "/with-island" },
      { name: "С пеналом", href: "/with-case" },
      { name: "Нестандартные", href: "/custom" },
    ],
  },
  {
    title: "По типу покрытия",
    links: [
      { name: "Глянцевый", href: "/glossy" },
      { name: "Древесный", href: "/woody" },
      { name: "Имитация дерева", href: "/wood-imitation" },
      { name: "Имитация материалов", href: "/material-imitation" },
      { name: "Матовый", href: "/matte" },
    ],
  },
  {
    title: "По покрытию фасада",
    links: [
      { name: "Декоративный пластик", href: "/plastic" },
      { name: "Термопластик", href: "/thermoplastic" },
      { name: "Шпон", href: "/veneer" },
      { name: "Эмаль", href: "/enamel" },
    ],
  },
  {
    title: "По материалу фасада",
    links: [
      { name: "Ламинированная ДСП", href: "/ldsp" },
      { name: "МДФ", href: "/mdf" },
      { name: "Плита TSS", href: "/tss" },
    ],
  },
];

const bottomLinks = [
  { children: "© 2025 Universe LITE, Вce пpaвa зaщищeны", href: "/" },
  { children: "Политика конфиденциальности", href: "/privacy-policy" },
  {
    children: "Согласие на обработку персональных данных",
    href: "/data-processing-agreement",
  },
  {
    children: (
      <>
        Разработан
        <Image src="/logo-wordmark.svg" alt="Logo" width={39} height={16} />
      </>
    ),
    href: "https://is-art.ru/",
  },
];

export default function Footer() {
  return (
    <div className="wrapper-narrow">
      <div className="py-10 flex flex-col gap-15">
        <div className="flex pb-5 border-b border-accent items-center flex-wrap lg:flex-nowrap gap-15">
          <Image src="/logo.png" alt="Logo" width={114} height={34} />
          <div className="flex gap-5 flex-wrap lg:justify-between w-full">
            {navigationLinks.map((link) => (
              <Link
                className="text-primary font-medium text-[18px]"
                key={link.href}
                href={link.href}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(189px,1fr))] gap-5">
          {footerData.map((sectionText) => (
            <div key={sectionText.title} className="flex flex-col gap-5">
              <h3 className="text-[18px] font-medium cursor-default font-circe">
                {sectionText.title}
              </h3>
              <div className="flex flex-col gap-2.5">
                {sectionText.links.map((link) => (
                  <FooterLink key={link.name} href={link.href}>
                    {link.name}
                  </FooterLink>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex justify-between flex-wrap gap-2">
            <div className="flex flex-col gap-2.5">
              <p className="text-[#656361] font-circe">
                Звоните по любым вопросам:
              </p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex cursor-pointer w-fit items-center gap-1.25">
                    <h5 className="text-[18px] font-medium">
                      +7 (495) 151-00-44
                    </h5>
                    <ChevronDown width={10} height={10} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="tel:+74951510044">+7 (495) 151-00-44</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="text-[#656361] font-circe">
                Вы можете отправить ваш проект на почту:
              </p>
              <Link
                href="mailto:mail@mail.com"
                className="text-[18px] font-medium"
              >
                mail@mail.com
              </Link>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {Array(7)
                .fill(null)
                .map((_, i) => (
                  <Link
                    key={i}
                    href="https://vk.com/"
                    className="size-12 rounded-full border border-[#656361] flex items-center justify-center hover:bg-accent transition-all"
                  >
                    <Image src="/vk-logo.svg" width={24} height={16} alt="VK" />
                  </Link>
                ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-between">
            {bottomLinks.map((link) => (
              <FooterLink
                key={link.href}
                className="!text-[16px] flex items-center gap-2.5"
                {...link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
