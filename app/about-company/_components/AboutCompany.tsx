import Fact, { TFactProps } from "@/app/_components/Fact";
import Block from "@/app/_components/shared/Block";
import Breadcrumbs, { TBreadcrumb } from "@/app/_components/ui/breadcrumbs";
import History from "@/app/about-company/_components/History";
import Ideology from "@/app/about-company/_components/Ideology/Ideology";
import InStyle from "@/app/about-company/_components/InStyle";
import OurCertificaties from "@/app/about-company/_components/OurCertificates";
import Reliability from "@/app/about-company/_components/Reliability";
import Image from "next/image";

export default function AboutCompany() {
  const breadcrumbs: TBreadcrumb[] = [
    { value: "Главная", href: "/" },
    { value: "О компании", href: "/about-company" },
  ];

  const facts: TFactProps[] = [
    {
      title: "5 цехов",
      description: "По производству и сборке мебели",
      icon: {
        slot: (
          <Image src="/dual-panel.svg" width={25} height={30} alt="5 цехов" />
        ),
      },
    },
    {
      title: "5 цехов",
      description: "По производству и сборке мебели",
      icon: {
        slot: (
          <Image src="/ornate-badge.svg" width={26} height={30} alt="5 цехов" />
        ),
      },
    },
    {
      title: "4000 человек",
      description: "включая сотрудников дилеров",
      icon: {
        slot: (
          <Image
            src="/calendar-stats.svg"
            width={32.85}
            height={30}
            alt="4000 человек"
          />
        ),
      },
    },
    {
      title: "92 500 м2",
      description: "общая площадь производства",
      icon: {
        slot: (
          <Image
            src="/pos-terminal.svg"
            width={31.97}
            height={30}
            alt="92 500 м2"
          />
        ),
      },
    },
  ];

  return (
    <div className="flex flex-col gap-2.5">
      <div className="wrapper-narrow">
        <Block>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </Block>
      </div>
      <div className="flex flex-col gap-20">
        <div className="w-full h-196.75 bg-center bg-cover bg-[url('/dabe3973eff3be65c3e98813174e4bf645cc5ec8.webp')] flex flex-col justify-end py-10">
          <div className="wrapper-narrow">
            <div className="p-5 md:p-10 bg-[#918A861A] backdrop-blur-2xl flex flex-col gap-10 w-full rounded-[20px]">
              <h1 className="text-4xl w-full md:text-5xl font-medium text-white leading-15">
                O кoмпaнии «VERNO Kуxни»
                <br />
                Mocквa, пpoизвoдитeлe мeбeли
              </h1>
              <div className="flex gap-5 overflow-auto max-w-335">
                {facts.map((fact, index) => (
                  <Fact
                    className="min-w-[320px] bg-[#F9F4F1] sm:!min-h-[166px]"
                    key={index}
                    {...fact}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-narrow">
          <div className="flex flex-col gap-20">
            <Ideology />
            <History />
          </div>
        </div>
        <InStyle />
        <div className="wrapper-narrow">
          <div className="flex flex-col gap-20">
            <Reliability />
            <OurCertificaties />
          </div>
        </div>
      </div>
    </div>
  );
}
