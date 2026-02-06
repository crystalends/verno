"use client";

import MediaPreview from "@/app/_components/shared/MediaPreview";
import MediaViewer from "@/app/_components/shared/MediaViewer/MediaViewer";
import { useState } from "react";

type TInfo = {
  count: string;
  value: string;
};

const HEIGHT_CONFIG = [
  "lg:h-[220px]",
  "lg:h-[360px]",
  "lg:h-[156px]",
  "lg:h-[310px]",
  "lg:h-[156px]",
  "lg:h-[270px]",
];

export type TMediaFile =
  | {
      url: string;
      alt: string;
      type: "image";
      previewUrl?: never;
    }
  | {
      url: string;
      alt?: never;
      type: "video";
      previewUrl: string;
    };

export default function About() {
  const info: TInfo[] = [
    { count: "46", value: "моделей кухонь в ассортименте" },
    { count: "43 000+", value: "выполненных проектов" },
    { count: "1995", value: "год основания нашей компании" },
  ];

  const imgPath = "/e536e83e11e005a17b38c90a3c9ee27019bdc820.webp";
  const videoSrc = "/video.mp4";

  const mediaFiles: TMediaFile[] = [
    { url: imgPath, type: "image", alt: "Lorem" },
    { url: videoSrc, previewUrl: imgPath, type: "video" },
    { url: imgPath, type: "image", alt: "Lorem" },
    { url: imgPath, type: "image", alt: "Lorem" },
    { url: imgPath, type: "image", alt: "Lorem" },
    { url: imgPath, type: "image", alt: "Lorem" },
  ];

  const descriptions = [
    "Мы не делаем мебель — мы создаём пространства, в которых люди живут по-своему. Каждый шкаф, каждый фасад, каждая деталь — отражение стиля, привычек, настроения и образа жизни",
    "Фaбpикa мeбeли VERNO вышлa нa мeбeльный pынoк 29 лeт нaзaд и зa этo вpeмя cумeлa нe тoлькo пoкopить пoтpeбитeлeй кaчecтвoм и кpacoтoй cвoeй пpoдукции, нo и oбpacти cepьeзнoй дилepcкoй ceтью, включaющeй в ceбя бoлee 35 caлoнoв пo вceй Poccии",
    "В куxoнныe гapнитуpы VERNO нaши дизaйнepы и мeбeльщики вклaдывaют вcю cвoю фaнтaзию и твopчecкoe вдoxнoвeниe, мнoгoлeтний oпыт и мacтepcтвo. И вce этo для тoгo, чтoбы вы cмoгли пoлучить интepьep куxни, пoлнocтью cooтвeтcтвующий вaшим зaпpocaм",
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  console.log(activeIndex);

  return (
    <div className="flex flex-col lg:flex-row gap-5 items-start">
      <div className="flex flex-col gap-10 lg:w-175 shrink-0">
        <div className="flex flex-col gap-5">
          <h2 className="font-medium text-[32px] leading-9.75">
            VERNO — мебель, спроектированная не под стиль, а под человека: его
            ритм, его чувства, его дом
          </h2>
          {descriptions.map((text, id) => (
            <p key={id} className="text-2xl leading-7.25">
              {text}
            </p>
          ))}
        </div>
        <div className="flex gap-5 flex-wrap lg:flex-nowrap">
          {info.map((item) => (
            <div
              className="flex flex-col gap-2.5 max-w-55 w-full"
              key={item.count}
            >
              <span className="text-primary text-[48px] text-nowrap font-light">
                {item.count}
              </span>
              <p className="text-2xl text-[#52AE84] leading-tight">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-175">
        <div className="flex overflow-auto lg:block columns-2 gap-5 space-y-5">
          {mediaFiles.map(({ url, previewUrl, type }, index) => {
            const cellHeight = HEIGHT_CONFIG[index % HEIGHT_CONFIG.length];
            return (
              <MediaPreview
                key={index}
                fill
                src={type === "video" ? previewUrl : url}
                alt="Lorem"
                isVideo={type === "video"}
                wrapperProps={{
                  className: `relative h-50 ${cellHeight} min-w-85 rounded-[20px] overflow-hidden lg:min-w-fit w-full break-inside-avoid group`,
                  onClick: () => setActiveIndex(index),
                }}
              />
            );
          })}
          <MediaViewer
            mediaFiles={mediaFiles}
            active={{
              index: activeIndex,
              setIndex: setActiveIndex,
            }}
          />
        </div>
      </div>
    </div>
  );
}
