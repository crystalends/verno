import { Button } from "@/app/_components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type TTechnologyCardProps = {
  name: string;
  href: string;
};

export default function TechnologyCard({ name, href }: TTechnologyCardProps) {
  return (
    <div className="bg-[#F0E2D7] rounded-[20px] p-5 flex gap-5 items-end justify-between">
      <h3 className="text-2xl leading-7.5">{name}</h3>
      <Button size="icon" asChild>
        <Link href={href}>
          <ChevronRight />
        </Link>
      </Button>
    </div>
  );
}
