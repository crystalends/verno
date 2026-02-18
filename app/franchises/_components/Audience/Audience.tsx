import AudienceCard from "@/app/franchises/_components/Audience/AudienceCard";
import Block from "@/app/_components/shared/TitledBlock";

export default function Audience() {
  const audience = [
    "Тем, кто хочет не просто работать, а работать с прибылью",
    "Тем, кто готов развиваться, применять новые инструменты и знания",
    "Инвесторам, которые готовы нанимать и обучать управляющих",
    "Тем, кому близки принципы и философия VERNO, и кто готов руководствоваться ими в работе",
    "Опытным бизнесменам из мебельной сферы и не только, а работать с прибылью",
    "Новичкам в ведении собственного бизнеса, которые готовы осваивать большой объем знаний и навыков",
  ];

  return (
    <Block title="Кому подойдет">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {audience.map((item, index) => (
          <AudienceCard key={index} name={item} />
        ))}
      </div>
    </Block>
  );
}
