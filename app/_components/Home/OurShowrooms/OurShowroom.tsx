import Image from "next/image";
import Link from "next/link";

type TOurShowroomProps = {
  name: string;
  address: string;
  workingHours: string;
  phone: string;
};

export default function OurShowroom({
  name,
  address,
  workingHours,
  phone,
}: TOurShowroomProps) {
  return (
    <div className="flex flex-col gap-10 p-5 rounded-[10px] min-w-[340px] justify-between bg-background">
      <div className="flex flex-col gap-10">
        <h5 className="text-[18px] font-medium">{name}</h5>
        <div className="flex flex-col gap-2.5">
          <p className="font-circe text-[16px] leading-4.75">{address}</p>
          <span className="font-circe text-[16px]">{workingHours}</span>
        </div>
      </div>
      <div className="flex items-center gap-1.25">
        <Image src="/Frame 23.svg" alt="Call" width={34} height={34} />
        <Link className="font-circe text-[18px]" href={`tel:${phone}`}>
          {phone}
        </Link>
      </div>
    </div>
  );
}
