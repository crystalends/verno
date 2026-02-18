import MediaPreview from "@/app/_components/shared/Media/MediaPreview";
import MediaViewer from "@/app/_components/shared/Media/MediaViewer";
import TitledBlock from "@/app/_components/shared/TitledBlock";
import Image from "next/image";

export default function Reliability() {
  return (
    <TitledBlock title="Огнем, железом и продуктами">
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div className="flex flex-col gap-5 justify-between">
          <h3 className="text-2xl">
            Журнал «Популярная механика» проверил наши кухни на прочность.
          </h3>

          <div className="flex flex-col gap-5">
            <div className="bg-[#ADCCBE] w-fit rounded-[20px] flex gap-2.5 p-5 text-primary">
              <Image
                src="/verified.svg"
                width={24}
                height={24}
                alt="Verified"
              />
              <span className="text-[18px] font-circe">
                Crush-тест пройден!
              </span>
            </div>
            <div className="flex flex-col gap-1.25">
              <p className="font-circe text-[18px]">
                Испытательным полигоном стал шоу-рум фабрики «Мария». Здесь
                в одном месте собраны более 20 кухонь, многие из них уникальны
                и выполнены в единственном экземпляре.
              </p>
              <p className="font-circe text-[18px]">
                Эксперименты проводились на выставочных моделях и опытных
                образцах, изготовленных специально для тестов.
              </p>
            </div>
          </div>
        </div>
        <MediaViewer
          triggerSlot={
            <MediaPreview
              isVideo
              src="/192b56f214248f7bea69f839e0578c6a63e484b1.webp"
              fill
              wrapperProps={{ className: "w-full h-50 xl:h-103.25" }}
              alt="Краш тест"
            />
          }
          mediaFiles={[
            {
              url: "/video.mp4",
              alt: "Краш тест",
              type: "video",
            },
          ]}
        />
      </div>
    </TitledBlock>
  );
}
