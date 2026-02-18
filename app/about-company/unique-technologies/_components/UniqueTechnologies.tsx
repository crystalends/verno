import Fact from "@/app/_components/Fact";
import Block from "@/app/_components/shared/Block";
import BlockTitle from "@/app/_components/shared/BlockTitle";
import Breadcrumbs, { TBreadcrumb } from "@/app/_components/ui/breadcrumbs";
import Image from "next/image";
import Link from "next/link";

export default function UniqueTechnologies() {
  const breadcrumbs: TBreadcrumb[] = [
    { value: "Главная", href: "/" },
    { value: "О компании", href: "/about-company" },
    {
      value: "Уникальные технологии",
      href: "/about-company/unique-technologies",
    },
  ];

  return (
    <div className="wrapper-narrow">
      <Block>
        <div className="flex flex-col gap-10 mb-16.75">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <BlockTitle>Уникальные технологии</BlockTitle>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <Fact
                key={index}
                icon={{
                  slot: (
                    <Image
                      src="/dual-panel.svg"
                      width={40}
                      height={40}
                      alt="Актуальный дизайн"
                    />
                  ),
                  wrapperProps: {
                    className: "size-20",
                  },
                }}
                title={
                  <Link href="/about-company/unique-technologies/multi-pro">
                    MultiPro - дoлгoвeчнocть фacaдoв в эмaли
                  </Link>
                }
              />
            ))}
          </div>
        </div>
      </Block>
    </div>
  );
}
