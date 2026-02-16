import OurShowroom from "@/app/_components/OurShowrooms/OurShowroom";

export default function OurShowrooms() {
  return (
    <div className="py-15 bg-[url('/9540bf9bd79d90aa13f4d3dc163a3a1808e93219.webp')] bg-center bg-cover">
      <div className="wrapper-narrow">
        <div className="flex flex-col gap-10 lg:gap-45">
          <h2 className="text-[32px] font-medium text-white">Наши салоны</h2>
          <div className="flex gap-5 overflow-auto">
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <OurShowroom
                  key={i}
                  name="TЦ «ЭлитCтpoй мaтepиaлы»"
                  address="Mocквa, TЦ «ЭлитCтpoй мaтepиaлы» MKAД 51 км, пoc. Зapeчьe, ул. Topгoвaя, cтp.2 , этaж 2, пaвильoн N-9"
                  workingHours="пн-вc 10:00 - 20:00"
                  phone="+7 (499) 841-84-10"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
