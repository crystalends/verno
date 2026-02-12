import { formatCurrency } from "@/app/_lib/formatCurrency";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/app/_components/ui/hover-card";

type PriceVariant = "price" | "from";

type TPriceProps = {
  value: number;
  oldValue?: number;
  variant?: PriceVariant;
};

export default function Price({
  value,
  oldValue,
  variant = "from",
}: TPriceProps) {
  const label = variant === "from" ? "Цена от" : "Цена";

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.75 items-end flex-wrap">
        <h4 className="text-[20px] font-medium">
          {label} {formatCurrency(value, "RUB")}
        </h4>
        {oldValue != null && (
          <span className="text-[#A09790] line-through text-sm font-circe">
            {formatCurrency(oldValue, "RUB")}
          </span>
        )}
      </div>

      {variant === "from" && (
        <HoverCard>
          <HoverCardTrigger asChild>
            <button
              type="button"
              className="inline-flex items-center"
              aria-label="Подробная информация о цене"
            >
              <Image
                src="/Information Circle.svg"
                alt=""
                width={13.333333015441895}
                height={13.333333015441895}
              />
            </button>
          </HoverCardTrigger>

          <HoverCardContent>
            <p className="font-circe">
              Cтoимocть куxни длинoй 2,4 мeтpa в бaзoвoй кoмплeктaции.
            </p>
          </HoverCardContent>
        </HoverCard>
      )}
    </div>
  );
}
