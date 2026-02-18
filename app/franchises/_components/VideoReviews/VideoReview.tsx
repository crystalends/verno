import MediaPreview, {
  TMediaPreviewProps,
} from "@/app/_components/shared/Media/MediaPreview";
import clsx from "clsx";

type TVideoReviewProps = {
  name: string;
  city: string;
  since: string;
} & Omit<TMediaPreviewProps, "width" | "height" | "alt" | "fill" | "isVideo">;

export default function VideoReview({
  name,
  city,
  since,
  wrapperProps,
  ...props
}: TVideoReviewProps) {
  const { className: classNameWrapperProps, ...restWrapperProps } =
    wrapperProps || {};
  return (
    <div className="flex flex-col gap-2.5">
      <MediaPreview
        isVideo
        fill
        alt={name}
        wrapperProps={{
          className: clsx(
            "relative h-67.5 w-115 overflow-hidden w-full break-inside-avoid group",
            classNameWrapperProps,
          ),
          ...restWrapperProps,
        }}
        {...props}
      />
      <div className="flex flex-col gap-1.25">
        <h3 className="text-2xl">{name}</h3>
        <div className="flex gap-2.5 flex-wrap">
          {[city, since].map((item, index) => (
            <span className="font-circe text-sm text-[#656361]" key={index}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
