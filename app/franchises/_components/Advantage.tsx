export type TAdvantageProps = {
  name: string;
  iconSlot?: React.ReactNode;
};

export default function Advantage({ name, iconSlot }: TAdvantageProps) {
  return (
    <div className="bg-[#F3EAE3] p-5 flex flex-col rounded-[20px]">
      {iconSlot && (
        <div className="bg-primary flex justify-center items-center rounded-full size-13.75 overflow-hidden">
          {iconSlot}
        </div>
      )}
      <div className="flex flex-col gap-2.5">
        <h4 className="text-2xl">{name}</h4>
      </div>
    </div>
  );
}
