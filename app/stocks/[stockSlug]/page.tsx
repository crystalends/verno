import Stock from "@/app/stocks/[stockSlug]/_components/Stock";

type TStockPageProps = {
  params: Promise<{
    stockSlug: string;
  }>;
};

export default function StockPage({ params }: TStockPageProps) {
  return <Stock />;
}
