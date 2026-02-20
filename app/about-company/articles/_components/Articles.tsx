import Pagination from "@/app/_components/Pagination";
import Article from "@/app/_components/shared/Article";
import Block from "@/app/_components/shared/Block";
import BlockTitle from "@/app/_components/shared/BlockTitle";
import Breadcrumbs, { TBreadcrumb } from "@/app/_components/ui/breadcrumbs";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";

export default function Articles() {
  const breadcrumbs: TBreadcrumb[] = [
    { value: "Главная", href: "/" },
    { value: "О компании", href: "/about-company" },
    {
      value: "Советы по организации жилого пространства",
      href: "/about-company/articles",
    },
  ];

  return (
    <div className="wrapper-narrow">
      <Block>
        <div className="flex flex-col gap-10 mb-16.75">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <BlockTitle>Советы по организации жилого пространства</BlockTitle>
          <div className="grid gap-x-5 gap-y-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 9 }).map((_, index) => (
              <Article
                key={index}
                imageProps={{
                  src: "/dabe3973eff3be65c3e98813174e4bf645cc5ec8.webp",
                  alt: "Kуxни бeз pучeк нa фacaдax: ocoбeннocти и пpeимущecтвa",
                }}
                title={
                  <Link href="/about-company/articles/lorem">
                    Kуxни бeз pучeк нa фacaдax: ocoбeннocти и пpeимущecтвa
                  </Link>
                }
                bottomContent={
                  <Button className="md:max-w-48.25" size="lg" asChild>
                    <Link href="/about-company/articles/lorem">
                      Читать статью
                    </Link>
                  </Button>
                }
              />
            ))}
          </div>
          <Pagination page={1} limit={9} total={200} />
        </div>
      </Block>
    </div>
  );
}
