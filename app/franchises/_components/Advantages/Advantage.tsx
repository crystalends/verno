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
        <h4 className="text-2xl">{name}</h4>
        {facts.length > 0 && (
          <ul className="flex flex-col gap-1.25 text-[16px] leading-[1.45] text-[#2B2B2B]">
            {facts.map((fact, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-[#6B6B6B] select-none">—</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
