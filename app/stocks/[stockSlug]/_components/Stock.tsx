import BackLink from "@/app/_components/BackLink";
import OrderDesignProject from "@/app/_components/DesignProject/OrderDesignProject";
import ArrowLeft from "@/app/_components/icons/ArrowLeft";
import Block from "@/app/_components/shared/Block";
import { Badge } from "@/app/_components/ui/badge";
import Breadcrumbs, { TBreadcrumb } from "@/app/_components/ui/breadcrumbs";
import Image from "next/image";
import Link from "next/link";

export default function Stock() {
  const breadcrumbs: TBreadcrumb[] = [
    { value: "Главная", href: "/" },
    { value: "Акции", href: "/stocks" },
    {
      value: "Oбeдeнный cтoл в пoдapoк пpи зaкaзe куxни",
      href: `/stocks/stocks-1`,
    },
  ];

  return (
    <Block>
      <div className="flex flex-col gap-2.5">
        <div className="wrapper-narrow">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>
        <div className="w-full h-130 bg-center bg-cover bg-[url('/e536e83e11e005a17b38c90a3c9ee27019bdc820.webp')] flex flex-col justify-end py-10 mb-10">
          <div className="wrapper-narrow">
            <div className="p-5 md:p-10 bg-[#918A861A] backdrop-blur-2xl max-w-175 w-full flex flex-col gap-2.5 rounded-[20px]">
              <Badge className="bg-[#FFFFFF33]">дo 31 дeкaбpя</Badge>
              <h1 className="text-4xl w-full md:text-5xl font-medium text-white leading-15">
                Oбeдeнный cтoл в пoдapoк пpи зaкaзe куxни
              </h1>
            </div>
          </div>
        </div>
        <div className="wrapper-narrow">
          <div className="max-w-325 w-full">
            <p className="mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              architecto autem sapiente commodi corporis cupiditate temporibus
              sequi expedita error omnis, rerum dolore totam molestias laborum
              ipsum, dolor possimus, recusandae illum illo magnam sed accusamus
              debitis iusto laudantium? Earum, quae hic odit facilis, quas
              aliquid cumque ut ullam atque architecto labore delectus sed,
              exercitationem cum quibusdam dignissimos quasi! Odit repellat
              temporibus dolor, dolores autem earum assumenda voluptate iure
              eaque tempore ut eveniet est minima nobis delectus reprehenderit
              quae distinctio enim quasi vero ex nemo iusto? Architecto nisi
              facilis, dolore sed accusamus voluptates, minima voluptatibus
              porro quasi unde officiis recusandae maxime sint rerum est fuga
              quidem! Soluta distinctio dolores aliquam nisi fugit aperiam,
              temporibus minus culpa autem aliquid? Repellat quam perspiciatis
              iusto officiis harum ipsam aut odit consequatur alias aperiam
              veniam obcaecati doloribus quibusdam optio veritatis incidunt quis
              porro aliquid, enim qui nisi. Laboriosam quibusdam commodi illum
              quidem, deserunt veritatis quia quod repellendus, molestiae
              inventore ad atque. Possimus, ipsam obcaecati? Dolores
              necessitatibus totam, amet blanditiis laborum eum in, tempore rem
              maxime esse veniam accusamus porro commodi. Necessitatibus
              voluptatum aliquam nobis nihil quibusdam officiis, animi eaque
              quidem illum deleniti sed quisquam, laudantium explicabo neque
              praesentium, suscipit maiores tempore at facilis cum sequi maxime
              voluptates? Ut non velit totam voluptatibus illo debitis error
              laboriosam quidem necessitatibus, voluptas excepturi et ratione
              facere ipsum ea dolor incidunt ipsam harum magni illum est libero?
              Ipsum magni ad eum fugiat perspiciatis rerum dolore temporibus
              nihil blanditiis esse! Aspernatur facere suscipit eligendi illum,
              quia obcaecati, maxime, vitae reiciendis ea non sed. Quas
              consequatur a ad delectus earum, placeat distinctio quidem. Modi
              sit mollitia animi. Molestiae aliquam beatae minima neque vitae
              quos accusantium expedita unde, recusandae eum iusto cupiditate
              soluta ad sunt ut numquam ratione laboriosam, eos dolore! Magnam
              doloribus numquam aut commodi ex dicta est eligendi assumenda.
              Nobis vitae praesentium quod sint. Impedit earum velit deserunt
              doloremque quod quis cum temporibus sed labore quia odio, aperiam
              provident aliquid tenetur neque saepe corrupti quos consectetur
              mollitia dolores laborum atque nesciunt? Quos, rem labore sunt
              aspernatur fuga iste optio ipsam non ad adipisci alias vitae nam
              repellendus maxime! Necessitatibus, doloremque praesentium earum
              rem officia pariatur facilis quia repellendus doloribus itaque
              optio molestias voluptatem dolor aut nostrum unde officiis quis
              fuga? Autem similique velit quod aspernatur eum asperiores.
              Excepturi animi, non ipsa laboriosam numquam ad magni quidem
              blanditiis perspiciatis facere distinctio nihil ipsum asperiores
              corrupti eligendi rem corporis quis officia ex nostrum laborum
              sint voluptate velit similique? Reprehenderit eveniet consectetur
              odit. Officiis quia sed dignissimos accusamus eos assumenda
              aliquid nisi accusantium atque! Tenetur hic amet provident
              numquam, mollitia sequi fuga atque, beatae similique officiis ab
              at rerum non. Magnam adipisci reprehenderit aliquid exercitationem
              hic, esse ipsa tempora recusandae eveniet corrupti enim similique,
              fugiat modi doloremque iure consequatur quod, ut voluptatem facere
              distinctio nulla voluptatibus! Molestiae ex iure nostrum! Eos
              totam rerum impedit rem voluptates distinctio ex, nesciunt et
              veritatis voluptatibus sequi, beatae iste fugiat. Quod porro
              doloribus corrupti officia nesciunt rem accusamus, ab quidem
              atque, sequi aliquam dignissimos praesentium at nihil repellendus?
            </p>
            <BackLink href="/stocks" className="mb-20" />
            <OrderDesignProject
              className="bg-[#F0E2D7] md:p-15 p-6 rounded-md mb-20"
              imageWidth={660}
            />
          </div>
        </div>
      </div>
    </Block>
  );
}
