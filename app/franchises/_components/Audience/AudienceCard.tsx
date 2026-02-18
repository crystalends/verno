import Image from "next/image";

type TAudienceCardProps = {
  name: string;
};

export default function AudienceCard({ name }: TAudienceCardProps) {
  return (
    <div className="flex gap-5 items-start sm:min-h-26.5 p-5 rounded-[20px] border border-[#656361]">
      <Image src="/successfully-filled.svg" width={44} height={44} alt={name} />
      <p className="text-lg leading-5">{name}</p>
    </div>
  );
}
