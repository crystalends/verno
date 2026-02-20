"use client";

import NavigationMenuLinkItem from "@/app/_components/Header/Navigation/NavigationMenu/NavigationMenuLinkItem";
import Promotions from "@/app/_components/Header/Navigation/NavigationMenu/Promotions";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/app/_components/ui/navigation-menu";
import {
  forBuyersLinks,
  navigationLinks,
  TNavigationLink,
} from "@/app/_data/navigationLinks";
import Link from "next/link";
import { useState } from "react";

type TMenuItem = {
  contentData?: {
    width?: number;
    value: React.ReactNode;
  };
} & TNavigationLink;

export default function Navigation() {
  const [openSales, setOpenSales] = useState(false);

  const menuContentMap: Record<string, TMenuItem["contentData"]> = {
    "/kitchens": {
      width: 582,
      value: (
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl">Кухни</h3>
          <div className="grid gap-5 grid-cols-2">
            {Array(6)
              .fill(null)
              .map((_, i) => (
                <Link key={i} href="/kitchens/dining">
                  <NavigationMenuLinkItem
                    name="Гостиные"
                    imageProps={{
                      src: "/99aed708759487e2d3376592182658955a632b8a.webp",
                      alt: "Гостиные",
                    }}
                  />
                </Link>
              ))}
          </div>
        </div>
      ),
    },
    "/furniture": {
      width: 582,
      value: (
        <div className="grid gap-5 grid-cols-2">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <Link key={i} href="/kitchens/dining">
                <NavigationMenuLinkItem
                  name="Гостиные"
                  imageProps={{
                    src: "/99aed708759487e2d3376592182658955a632b8a.webp",
                    alt: "Гостиные",
                  }}
                />
              </Link>
            ))}
        </div>
      ),
    },
    "/stocks": {
      width: openSales ? 383 : 214,
      value: <Promotions openSales={openSales} setOpenSales={setOpenSales} />,
    },
    "/projects-3d": {
      width: 255,
      value: (
        <ul className="flex flex-col gap-5">
          {forBuyersLinks.map(({ href, name }) => (
            <Link key={href} href={href}>
              {name}
            </Link>
          ))}
        </ul>
      ),
    },
    "/about-company": {
      width: 315,
      value: (
        <ul className="flex flex-col gap-5">
          {[
            { name: "О нас", href: "/about-company" },
            { name: "Реализованные проекты", href: "/about-company/projects" },
            { name: "Отзывы", href: "/about-company/reviews" },
            {
              name: "Уникальные технологии",
              href: "/about-company/unique-technologies",
            },
            {
              name: "Советы по организации жилого пространства",
              href: "/about-company/advice",
            },
          ].map((link) => (
            <Link key={link.href} href={link.href}>
              {link.name}
            </Link>
          ))}
        </ul>
      ),
    },
  };

  const menuItems: TMenuItem[] = navigationLinks.map((link) => ({
    ...link,
    contentData: menuContentMap[link.href as keyof typeof menuContentMap],
  }));

  return (
    <NavigationMenu
      className="z-10 hidden lg:block max-w-full"
      viewport={false}
    >
      <NavigationMenuList className="justify-between gap-2 w-full">
        {menuItems.map(({ name, contentData, href }) => (
          <NavigationMenuItem key={name}>
            {contentData ? (
              <>
                <NavigationMenuTrigger>
                  <Link href={href}>{name}</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  style={{
                    width: contentData.width,
                  }}
                >
                  {contentData.value}
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild className="font-circe">
                {href ? <Link href={href}>{name}</Link> : name}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
