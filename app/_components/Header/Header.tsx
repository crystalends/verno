"use client";

import React from "react";
import Navigation from "@/app/_components/Header/Navigation/Navigation";
import { Button } from "@/app/_components/ui/button";
import { motion, useTransform } from "framer-motion";
import { useSmartHeader } from "@/app/_hooks/Header/useSmartHeader";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useIsScrolled } from "@/app/_hooks/useIsScrolled";
import clsx from "clsx";
import Link from "next/link";
import FavoriteButton from "@/app/_components/FavoriteButton";

type THeaderProps = {
  orderDesignProjectModalSlot: React.ReactNode;
};

export default function Header({ orderDesignProjectModalSlot }: THeaderProps) {
  const { hidden, scrollY } = useSmartHeader();
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const isScrolled = useIsScrolled(scrollY, 50);

  const headerPaddingTop = useTransform(
    scrollY,
    [0, 100],
    [isMobile ? "10px" : "20px", "10px"],
  );
  const logoWidth = useTransform(scrollY, [0, 100], [164, 106]);
  const logoHeight = useTransform(scrollY, [0, 100], [49, 32]);
  const contactsOpacity = useTransform(scrollY, [0, 50], [1, 0]);
  const contactsDisplay = useTransform(scrollY, [0, 51], ["flex", "none"]);

  const blurValue = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(20px)"],
  );
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 250, 248, 1)", "rgba(249, 244, 241, 0.2)"],
  );

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
      className="fixed top-0 left-0 pb-2.5 right-0 z-50 transition-colors duration-300"
    >
      <div className="wrapper-narrow">
        <motion.div layout className="flex justify-between items-start gap-5">
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

          <div className="hidden lg:flex flex-col items-end w-full gap-2.5">
            <motion.div
              style={{ opacity: contactsOpacity, display: contactsDisplay }}
              className="lg:flex hidden w-fit gap-5 items-center"
            >
              <div className="flex items-center gap-[3.5px]">
                <Image
                  src="/Location.svg"
                  alt="Location"
                  width={10}
                  height={13}
                />
                <span className="font-circe font-light text-[#A09790]">
                  Москва
                </span>
              </div>
              <div className="flex items-center gap-1.25">
                <Image src="/Frame 23.svg" alt="Call" width={34} height={34} />
                <div className="flex items-end flex-col">
                  <span className="font-circe text-sm tracking-[1px]">
                    +7 (499) 841-84-10
                  </span>
                  <span className="text-[12px] font-circe text-[#A09790]">
                    Мельбград
                  </span>
                </div>
              </div>
              <Button size="icon" variant="ghost" className="size-6 min-h-fit">
                <Image src="/Vector.svg" alt="Search" width={16} height={16} />
              </Button>
              <Link href="/favorites">
                <FavoriteButton />
              </Link>
              {orderDesignProjectModalSlot}
            </motion.div>

            <motion.div
              layout
              className={clsx(
                "w-full flex justify-between items-center transition-all duration-300",
                isScrolled && "max-w-290.25 gap-[118.5px]",
              )}
            >
              <Navigation />
              {isScrolled && (
                <Link href="/favorites">
                  <FavoriteButton />
                </Link>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
