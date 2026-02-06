import { MotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export const useIsScrolled = (
  scrollY: MotionValue<number>,
  limit: number = 50,
) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > limit);
    });
  }, [scrollY, limit]);

  return isScrolled;
};
