"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/_components/ui/carousel";
import {
  Dialog,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { ChevronLeft, ChevronRight, XIcon } from "lucide-react";
import { useCarouselControls } from "@/app/_hooks/useCarouselControls";
import { useEffect } from "react";
import { buttonVariants } from "@/app/_components/ui/button";
import { VariantProps } from "class-variance-authority";
import MediaViewerSlideControl from "@/app/_components/shared/MediaViewer/MediaViewerSlideControl";
import { VisuallyHidden } from "radix-ui";

export type TMediaViewerFile = {
  url: string;
  alt?: string;
  type: "image" | "video";
};

type TMediaViewerProps = {
  triggerSlot?: React.ReactNode;
  mediaFiles: TMediaViewerFile[];
  active?: {
    index: number | null;
    setIndex: (index: number | null) => void;
  };
  useControls?: boolean;
  controls?: {
    props?: Omit<
      React.ComponentProps<"button"> &
        VariantProps<typeof buttonVariants> & {
          asChild?: boolean;
        },
      "onClick" | "disabled" | "children"
    >;
    leftSlot?: React.ReactNode;
    rightSlot?: React.ReactNode;
  };
};

export default function MediaViewer({
  triggerSlot,
  mediaFiles,
  active,
  useControls = true,
  controls,
}: TMediaViewerProps) {
  const setExternalIndex = active?.setIndex;

  const {
    activeIndex,
    setApi,
    scrollTo,
    handlePrev,
    handleNext,
    canScrollNext,
    canScrollPrev,
  } = useCarouselControls(active?.index, (index) => setExternalIndex?.(index));

  const handleOpenChange = (open: boolean) => {
    if (!open && setExternalIndex) setExternalIndex(null);
  };

  useEffect(() => {
    if (typeof active?.index === "number") {
      scrollTo(active.index);
    }
  }, [active?.index, scrollTo]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (active?.index === null) return;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        if (canScrollNext) handleNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (canScrollPrev) handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [active?.index, canScrollNext, canScrollPrev, handleNext, handlePrev]);

  const handleClose = () => {
    if (setExternalIndex) setExternalIndex(null);
  };

  const { className: controlsClassName, ...restControlsProps } =
    controls?.props || {};

  const {
    leftSlot: controlLeftSlot = (
      <ChevronLeft className="h-4 w-4 text-[#FFFFFF66] transition-colors group-hover:text-foreground" />
    ),
    rightSlot: controlRightSlot = (
      <ChevronRight className="h-4 w-4 text-[#FFFFFF66] transition-colors group-hover:text-foreground" />
    ),
  } = controls || {};

  return (
    <Dialog open={active?.index !== null} onOpenChange={handleOpenChange}>
      {triggerSlot && <DialogTrigger asChild>{triggerSlot}</DialogTrigger>}

      <DialogPortal>
        <DialogOverlay className="backdrop-blur-[20px] bg-[#656361CC] z-100" />
        <DialogPrimitive.Content className="fixed inset-0 z-101 flex items-center justify-center outline-none overflow-hidden">
          <DialogPrimitive.Close
            onClick={handleClose}
            className="absolute flex justify-center items-center size-11 top-5 right-5 z-101 md:top-15 md:right-15 p-2 rounded-full border border-white transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring disabled:pointer-events-none"
          >
            <XIcon className="size-6 text-white" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
          <VisuallyHidden.Root>
            <DialogTitle>Media viewer</DialogTitle>
          </VisuallyHidden.Root>

          <Carousel
            setApi={setApi}
            opts={{ align: "center", loop: false, containScroll: false }}
            className="w-full"
          >
            <CarouselContent>
              {mediaFiles.map(({ url, alt, type }, index) => {
                const isActive = index === activeIndex;

                return (
                  <CarouselItem
                    key={index}
                    className="basis-9/10 lg:basis-3/5 flex items-center justify-center"
                  >
                    <div
                      className={`relative w-full flex items-center justify-center transition-all duration-500 ease-out ${
                        isActive
                          ? "scale-100 opacity-100 brightness-100"
                          : "scale-[0.8] opacity-40 brightness-[0.4]"
                      }`}
                    >
                      <div className="relative overflow-hidden rounded-[20px] shadow-2xl bg-black/20">
                        {type === "image" ? (
                          <img
                            src={url}
                            alt={alt}
                            className="block w-auto max-h-[75vh] object-contain pointer-events-none"
                          />
                        ) : (
                          <video
                            src={url}
                            controls={isActive}
                            autoPlay={isActive}
                            muted
                            playsInline
                            className="block w-auto max-h-[75vh] object-contain"
                          />
                        )}
                        {useControls && isActive && (
                          <div className="flex z-101 justify-between gap-2 absolute top-1/2 left-2.5 right-2.5 -translate-y-1/2">
                            <MediaViewerSlideControl
                              onClick={handlePrev}
                              disabled={!canScrollPrev}
                              className={controlsClassName}
                              {...restControlsProps}
                            >
                              {controlLeftSlot}
                            </MediaViewerSlideControl>

                            <MediaViewerSlideControl
                              onClick={handleNext}
                              disabled={!canScrollNext}
                              className={controlsClassName}
                              {...restControlsProps}
                            >
                              {controlRightSlot}
                            </MediaViewerSlideControl>
                          </div>
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
