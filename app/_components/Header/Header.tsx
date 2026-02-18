"use client";

import React from "react";
import Navigation from "@/app/_components/Header/Navigation/Navigation";
import { Button } from "@/app/_components/ui/button";
import { motion, useTransform } from "framer-motion";
import { useSmartHeader } from "@/app/_hooks/Header/useSmartHeader";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useIsScrolled } from "@/app/_hooks/useIsScrolled";
import Link from "next/link";
import FavoriteButton from "@/app/_components/FavoriteButton";
import clsx from "clsx";
import NavigationMobile from "@/app/_components/Header/Navigation/NavigationMobile";

type THeaderProps = {
  orderDesignProjectModalSlot: React.ReactNode;
};

export default function Header({ orderDesignProjectModalSlot }: THeaderProps) {
  const { hidden, scrollY } = useSmartHeader();
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const isScrolled = useIsScrolled(scrollY, 50);

  const t = useTransform(scrollY, [0, 80], [0, 1]);

  const headerPaddingTop = useTransform(
    t,
    [0, 1],
    [isMobile ? "10px" : "20px", "10px"],
  );
  const logoWidth = useTransform(t, [0, 1], [164, 106]);
  const logoHeight = useTransform(t, [0, 1], [49, 32]);

  const blurValue = useTransform(t, [0, 1], ["blur(0px)", "blur(20px)"]);
  const headerBg = useTransform(
    t,
    [0, 1],
    ["rgba(255, 250, 248, 1)", "rgba(249, 244, 241, 0.2)"],
  );

  const contactsOpacity = useTransform(t, [0, 1], [1, 0]);
  const contactsHeight = useTransform(t, [0, 1], ["43px", "0px"]);
  const contactsMarginBottom = useTransform(t, [0, 1], ["10px", "0px"]);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        paddingTop: headerPaddingTop,
        backgroundColor: headerBg,
        backdropFilter: blurValue,
        WebkitBackdropFilter: blurValue,
      }}
      className="fixed top-0 left-0 right-0 z-50 pb-2.5 transition-colors duration-300"
    >
      <div className="wrapper-narrow">
        <motion.div
          layout
          className="flex items-center lg:items-start justify-between gap-5"
        >
          <motion.div
            layout
            style={{ width: logoWidth, height: logoHeight }}
            className="relative shrink-0"
          >
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </motion.div>

          <motion.div
            layout
            className="hidden w-full flex-col items-end lg:flex"
          >
            <motion.div
              layout="position"
              style={{
                opacity: contactsOpacity,
                height: contactsHeight,
                marginBottom: contactsMarginBottom,
              }}
              className="flex w-fit items-center gap-5 overflow-hidden"
            >
              <div className="flex items-center gap-[3.5px]">
                <Image
                  src="/map-pin.svg"
                  alt="Location"
                  width={10}
                  height={13}
                />
                <span className="font-circe font-light text-[#A09790]">
                  Москва
                </span>
              </div>

              <div className="flex items-center gap-1.25">
                <Image
                  src="/phone-call.svg"
                  alt="Call"
                  width={34}
                  height={34}
                />
                <div className="flex flex-col items-end">
                  <span className="font-circe text-sm tracking-[1px]">
                    +7 (499) 841-84-10
                  </span>
                  <span className="font-circe text-[12px] text-[#A09790]">
                    Мельбград
                  </span>
                </div>
              </div>

              <Button size="icon" variant="ghost" className="size-6 min-h-fit">
                <Image src="/search.svg" alt="Search" width={16} height={16} />
              </Button>

              <Link href="/favorites">
                <FavoriteButton />
              </Link>

              {orderDesignProjectModalSlot}
            </motion.div>

            <motion.div
              layout
              className={clsx(
                "w-full flex justify-between gap-5 items-center transition-all duration-300 max-w-297.5",
                isScrolled && "max-w-290.25",
              )}
            >
              <motion.div
                layout
                className={clsx("flex-1", isScrolled && "max-w-260.75")}
              >
                <Navigation />
              </motion.div>
              {isScrolled && (
                <motion.div
                  layout
                  initial={{ x: 36, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 520, damping: 38 }}
                >
                  <Link href="/favorites">
                    <FavoriteButton />
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          <div className="block lg:hidden">
            <NavigationMobile />
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
