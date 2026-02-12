import Kitchen from "@/app/kitchens/[kitchenSlug]/_components/Kitchen";

type TKitchenPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default function KitchenPage({ params }: TKitchenPageProps) {
  return <Kitchen />;
}
