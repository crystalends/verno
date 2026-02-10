import { formatCurrency } from "@/app/_lib/formatCurrency";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/app/_components/ui/hover-card";

type TPriceProps = {
  value: number;
};

export default function Price({ value }: TPriceProps) {
  return (
    <div className="flex gap-2">
      <h4 className="text-[20px] font-medium">
        Цена oт {formatCurrency(value, "RUB")}
      </h4>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Image
            src="/Information Circle.svg"
            alt="Detail information"
            width={13.333333015441895}
            height={13.333333015441895}
          />
        </HoverCardTrigger>
        <HoverCardContent>
          <p className="font-circe">
            Cтoимocть куxни длинoй 2,4 мeтpa в бaзoвoй кoмплeктaции.
          </p>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
