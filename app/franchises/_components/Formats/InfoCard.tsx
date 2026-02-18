type TInfoCardProps = {
  label: string;
  value?: string;
  children?: React.ReactNode;
};

export default function InfoCard({ label, value, children }: TInfoCardProps) {
  return (
    <div className="bg-white rounded-[10px] flex flex-col gap-2.5 p-2.5">
      <div className="text-[#A09790] text-sm">{label}</div>
      {value ? (
        <div className="font-circe leading-4.75">{value}</div>
      ) : (
        <div className="font-circe leading-4.75">{children}</div>
      )}
    </div>
  );
}
