import Price from "@/app/_components/Catalog/Price";
import ArrowLeft from "@/app/_components/icons/ArrowLeft";
import FavoriteIcon from "@/app/_components/icons/FavoriteIcon";
import TitledCarousel from "@/app/_components/TitledCarousel";
import Block from "@/app/_components/shared/Block";
import BlockTitle from "@/app/_components/shared/BlockTitle";
import ProductCard from "@/app/_components/shared/ProductCard";
import TitledBlock from "@/app/_components/shared/TitledBlock";
import { Badge } from "@/app/_components/ui/badge";
import Breadcrumbs, { TBreadcrumb } from "@/app/_components/ui/breadcrumbs";
import { Button } from "@/app/_components/ui/button";
import { CarouselItem } from "@/app/_components/ui/carousel";
import ImagesCarousel from "@/app/about-company/unique-technologies/[uniqueTechnologySlug]/_components/ImagesCarousel";
import Link from "next/link";
import BackLink from "@/app/_components/BackLink";

export default function UniqueTechnology() {
  const breadcrumbs: TBreadcrumb[] = [
    { value: "Главная", href: "/" },
    { value: "О компании", href: "/about-company" },
    {
      value: "Уникальные технологии",
      href: "/about-company/unique-technologies",
    },
    {
      value: "MultiPro - долговечность фасадов в эмали",
      href: "/about-company/unique-technologies/multi-pro",
    },
  ];

  return (
    <div className="wrapper-narrow">
      <Block>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-10">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <BlockTitle>MultiPro - дoлгoвeчнocть фacaдoв в эмaли</BlockTitle>
            <p className="font-circe max-w-265">
              Ecли Вaм пo душe минимaлизм, oбpaтитe внимaниe нa куxoнныe
              гapнитуpы бeз pучeк. Oтcутcтвиe лишниx дeтaлeй дeлaeт интepьep
              oднoвpeмeннo cтpoгим и элeгaнтным. Дизaйнepы вce чaщe пpeдлaгaют
              тaкиe peшeния для куxoннoгo пpocтpaнcтвa, выпoлнeнныe в
              coвpeмeннoм cтилe. Ceгoдня пoпpoбуeм paзoбpaтьcя, нacкoлькo тaкoй
              вapиaнт удoбeн и пpaктичeн
            </p>
            <div className="flex flex-wrap xl:flex-nowrap gap-5 items-center">
              <div className="flex flex-col xl:flex-1 gap-5 xl:gap-30.5">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Commodi eaque dolore a? Cupiditate ut magnam quaerat alias
                  illum vitae eveniet iure explicabo ratione nulla maiores
                  suscipit exercitationem aliquam nesciunt excepturi unde eum
                  aspernatur, iusto quia veniam voluptatibus est. Placeat, nulla
                  qui? Quae commodi debitis quam quibusdam, illum, nesciunt vel
                  temporibus, ipsam exercitationem voluptas est maiores et
                  numquam quidem eum repellat totam. Vel nam quae repudiandae
                  excepturi delectus officia quisquam impedit reprehenderit
                  atque dolores dolorem culpa iusto pariatur, id tempore nihil
                  odio beatae natus similique debitis eum ex earum totam? Vel
                  culpa odio quia! Blanditiis quibusdam optio quidem quo facilis
                  voluptatem ex deserunt eligendi non voluptas temporibus
                  doloremque, sint delectus ea nesciunt maiores est, incidunt
                  aliquam vitae? Ducimus eligendi vero delectus, illum
                  repellendus, quod nemo consequatur neque nam rerum vitae
                  similique laborum odit quam. Officia iste accusantium quas
                  corporis suscipit, vitae nam, error alias natus dolor
                  recusandae veniam doloremque incidunt inventore id ducimus
                  eaque animi porro quae neque dolores! Libero facilis aut
                  accusantium vero ut, magnam distinctio inventore expedita,
                  exercitationem obcaecati atque. Labore minus, reiciendis et
                  tempore debitis ad assumenda impedit nam, sit temporibus
                  cumque aliquam quos culpa aliquid, incidunt ut repellat
                  repellendus! Blanditiis, qui? Dolor vero exercitationem quod?
                  Pariatur in nihil labore placeat et cupiditate alias doloribus
                  ad dolores sint, illo aliquid blanditiis facere harum iure
                  nesciunt doloremque adipisci illum, earum debitis culpa? Enim
                  tempore ex, hic repellat reprehenderit repudiandae earum nihil
                  rerum, vero laudantium perferendis ad voluptas unde beatae at
                  exercitationem illum commodi consequuntur atque! Blanditiis
                  tenetur earum adipisci dolor aliquam suscipit doloribus amet
                  minima omnis mollitia ducimus perspiciatis magnam cupiditate
                  beatae voluptatem minus libero dolores iure nemo quibusdam
                  esse in aperiam, dolorum deserunt. Delectus facere temporibus
                  provident perspiciatis quae voluptas obcaecati labore
                  doloribus repellat? Distinctio, facere, inventore minima
                  dolorem nulla odit omnis reiciendis possimus impedit autem
                  repellat dignissimos!
                </p>
                <BackLink href="/about-company/unique-technologies" />
              </div>
              <div className="xl:max-w-145 w-full">
                <ImagesCarousel />
              </div>
            </div>
          </div>
          <TitledCarousel className="mb-20">
            {Array.from({ length: 18 }).map((_, index) => (
              <CarouselItem key={index} className="basis-115 shrink-0 grow-0">
                <ProductCard
                  key={index}
                  imageProps={{
                    src: "/e536e83e11e005a17b38c90a3c9ee27019bdc820.webp",
                    alt: "Кухонный гарнитур Джулия",
                  }}
                  name={
                    <Link href={`/kitchens/kitchen-${index + 1}`}>
                      Кухонный гарнитур Джулия
                    </Link>
                  }
                  description="Эмаль"
                  topContent={
                    <div className="absolute top-2.5 left-2.5 right-2.5">
                      <div className="flex gap-2.5">
                        <Badge>Новинка</Badge>
                        <Badge>Хит</Badge>
                      </div>
                      <Button
                        size="icon"
                        variant="outline"
                        className="min-h-fit right-0 absolute top-0 text-white backdrop-blur-[20px] h-[24px] w-[24px] border-white hover:border-primary [&_svg]:!w-[7px] [&_svg]:!h-[9.33px]"
                      >
                        <FavoriteIcon />
                      </Button>
                    </div>
                  }
                  bottomContent={
                    <div className="flex gap-2.5 flex-wrap justify-between">
                      <Price value={12345} />
                      <Button size="sm" className="lg:w-fit lg:!min-w-48.25">
                        Заказать проект
                      </Button>
                    </div>
                  }
                />
              </CarouselItem>
            ))}
          </TitledCarousel>
        </div>
      </Block>
    </div>
  );
}
