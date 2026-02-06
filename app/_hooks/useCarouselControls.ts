import { CarouselApi } from "@/app/_components/ui/carousel";
import { useCallback, useEffect, useState } from "react";

export function useCarouselControls(
  initialIndex?: number | null,
  onIndexChange?: (index: number) => void,
) {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateStates = useCallback((apiInstance: CarouselApi) => {
    if (!apiInstance) return null;

    const newIndex = apiInstance.selectedScrollSnap();
    setActiveIndex(newIndex);
    setCanScrollPrev(apiInstance.canScrollPrev());
    setCanScrollNext(apiInstance.canScrollNext());
    return newIndex;
  }, []);

  const onSelect = useCallback(
    (apiInstance: CarouselApi) => {
      if (!apiInstance || initialIndex === null) return;

      const newIndex = updateStates(apiInstance);
      if (newIndex !== null) {
        onIndexChange?.(newIndex);
      }
    },
    [onIndexChange, initialIndex, updateStates],
  );

  useEffect(() => {
    if (!api) return;

    const handler = () => onSelect(api);
    api.on("select", handler);
    api.on("reInit", handler);

    return () => {
      api.off("select", handler);
      api.off("reInit", handler);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (!api || typeof initialIndex !== "number") return;

    api.scrollTo(initialIndex, true);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    updateStates(api);
  }, [api, initialIndex, updateStates]);

  return {
    setApi,
    activeIndex,
    scrollTo: (i: number) => api?.scrollTo(i),
    handlePrev: () => api?.scrollPrev(),
    handleNext: () => api?.scrollNext(),
    canScrollPrev,
    canScrollNext,
  };
}
