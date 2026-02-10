import ProductMediaViewer from "@/app/_components/ProductMediaViewer";
import Block from "@/app/_components/shared/Block";
import BlockTitle from "@/app/_components/shared/BlockTitle";
import Breadcrumbs, { TBreadcrumb } from "@/app/_components/ui/breadcrumbs";
import { TMediaFile } from "@/app/_types/TMediaFile";

type TKitchenPageProps = {
  params: {
    slug: string;
  };
};

export default function KitchenPage({ params }: TKitchenPageProps) {
  const breadcrumbs: TBreadcrumb[] = [
    { value: "Главная", href: "/" },
    { value: "Кухни", href: "/kitchens" },
    { value: "Kуxoнный гapнитуp Джулия", href: `/kitchens/${params.slug}` },
  ];

  const imgPath = "/e536e83e11e005a17b38c90a3c9ee27019bdc820.webp";
  const videoSrc = "/video.mp4";

  const mediaFiles: TMediaFile[] = [
    { url: imgPath, type: "image", alt: "Lorem" },
    { url: videoSrc, previewUrl: imgPath, type: "video" },
    { url: imgPath, type: "image", alt: "Lorem" },
    { url: imgPath, type: "image", alt: "Lorem" },
    { url: imgPath, type: "image", alt: "Lorem" },
    { url: imgPath, type: "image", alt: "Lorem" },
  ];

  return (
    <div className="wrapper-narrow">
      <Block>
        <div className="flex flex-col gap-10">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <BlockTitle>Kуxoнный гapнитуp Джулия</BlockTitle>
          <ProductMediaViewer mediaFiles={mediaFiles} />
        </div>
      </Block>
    </div>
  );
}
