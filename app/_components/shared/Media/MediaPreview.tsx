import { Button } from "@/app/_components/ui/button";
import clsx from "clsx";
import Image, { ImageProps } from "next/image";

type TMediaPreviewProps = {
  isVideo: boolean;
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  playSlot?: React.ReactNode;
} & Pick<ImageProps, "src" | "width" | "height" | "alt" | "className" | "fill">;

export default function MediaPreview({
  isVideo = false,
  wrapperProps,
  playSlot = <Image src="/play-badge.svg" width={17} height={18} alt="Play" />,
  ...props
}: TMediaPreviewProps) {
  const { className, alt, ...restProps } = props;
  const { className: wrapperClassName, ...restWrapperProps } =
    wrapperProps || {};
  return (
    <div
      className={clsx(
        "relative rounded-[20px] overflow-hidden w-fit break-inside-avoid group",
        wrapperClassName,
      )}
      {...restWrapperProps}
    >
      <Image
        alt={alt}
        className={clsx(
          "object-cover transition-transform duration-500 group-hover:scale-105",
          className,
        )}
        {...restProps}
      />
      {isVideo && (
        <Button
          size="icon"
          variant="link"
          className="
            absolute
            top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            bg-background
            size-10.5
            group-hover:scale-115
            group-hover:bg-accent
            duration-500
          "
        >
          {playSlot}
        </Button>
      )}
    </div>
  );
}
