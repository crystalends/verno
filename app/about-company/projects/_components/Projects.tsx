import CompletedProject from "@/app/_components/CompletedProject";
import Pagination from "@/app/_components/Pagination";
import Block from "@/app/_components/shared/Block";
import BlockTitle from "@/app/_components/shared/BlockTitle";
import TitledBlock from "@/app/_components/shared/TitledBlock";
import Breadcrumbs, { TBreadcrumb } from "@/app/_components/ui/breadcrumbs";

export default function Projects() {
  const breadcrumbs: TBreadcrumb[] = [
    { value: "Главная", href: "/" },
    { value: "О компании", href: "/about-company" },
    { value: "Реализованные проекты", href: "/about-company/projects" },
  ];

  return (
    <div className="wrapper-narrow">
      <Block>
        <div className="flex flex-col gap-10 mb-20">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <BlockTitle>Реализованные проекты</BlockTitle>
          <div className="flex flex-col gap-15">
            <div className="grid gap-x-5 gap-y-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 9 }).map((_, index) => (
                <CompletedProject
                  key={index}
                  title="Лaйт Kвaдpo + Mиa"
                  date="июнь 2024"
                  imageProps={{
                    src: "/dabe3973eff3be65c3e98813174e4bf645cc5ec8.webp",
                  }}
                />
              ))}
            </div>
            <Pagination page={1} total={500} limit={9} />
          </div>
        </div>
      </Block>
    </div>
  );
}
