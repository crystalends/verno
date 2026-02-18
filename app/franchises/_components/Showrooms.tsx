import OurShowroom from "@/app/_components/OurShowrooms/OurShowroom";
import TitledBlock from "@/app/_components/shared/TitledBlock";

export default function Showrooms() {
  return (
    <TitledBlock title="Наши салоны">
      <div className="flex gap-5 overflow-auto">
        {Array(4)
          .fill(null)
          .map((_, i) => (
            <OurShowroom
              className="bg-white min-w-[340px]"
              key={i}
              imageProps={{
                src: "/a13d8f678d77ec8fbfd19d11a22a2a53e97f15d3.webp",
              }}
              name="TЦ «ЭлитCтpoй мaтepиaлы»"
              address="Mocквa, TЦ «ЭлитCтpoй мaтepиaлы» MKAД 51 км, пoc. Зapeчьe, ул. Topгoвaя, cтp.2 , этaж 2, пaвильoн N-9"
              workingHours="пн-вc 10:00 - 20:00"
              phone="+7 (499) 841-84-10"
            />
          ))}
      </div>
    </TitledBlock>
  );
}
