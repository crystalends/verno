import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export const useSmartHeader = (threshold = 150) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > threshold) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return { hidden, scrollY };
};
