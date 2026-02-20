import { ListItem } from "@/app/_components/ui/list-item";

export type TAdvantageProps = {
  name: string;
  facts: string[];
  iconSlot?: React.ReactNode;
};

export default function Advantage({ name, iconSlot, facts }: TAdvantageProps) {
  return (
    <div className="bg-[#F3EAE3] p-5 flex flex-col gap-5 rounded-[20px]">
      {iconSlot && (
        <div className="bg-primary flex justify-center items-center rounded-full size-13.75 overflow-hidden">
          {iconSlot}
        </div>
      )}
      <div className="flex flex-col gap-2.5">
        <h4 className="text-2xl leading-7">{name}</h4>
        {facts.length > 0 && (
          <ul className="flex flex-col gap-1.25 text-[16px] leading-4.75 tracking-[-0.04em]">
            {facts.map((fact, i) => (
              <ListItem key={i}>{fact}</ListItem>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
