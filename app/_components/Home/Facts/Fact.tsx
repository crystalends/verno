export type TFactProps = {
  title: string;
  description: string;
  iconSlot?: React.ReactNode;
};

export default function Fact({ title, description, iconSlot }: TFactProps) {
  return (
    <div className="flex flex-col gap-10 bg-[#F3EAE3] rounded-[20px] p-5 justify-between sm:min-h-59.75">
      {iconSlot && (
        <div className="bg-primary flex justify-center items-center rounded-full size-13.75 overflow-hidden">
          {iconSlot}
        </div>
      )}
      <div className="flex flex-col gap-2.5">
        <h4 className="font-medium text-[20px] leading-6.25">{title}</h4>
        <p className="font-circe font-light leading-4.75">{description}</p>
      </div>
    </div>
  );
}
