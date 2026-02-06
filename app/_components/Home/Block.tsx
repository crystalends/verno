type TBlockProps = {
  title: string;
  children: React.ReactNode;
};

export default function Block({ title, children }: TBlockProps) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-[32px] font-medium">{title}</h2>
      {children}
    </div>
  );
}
