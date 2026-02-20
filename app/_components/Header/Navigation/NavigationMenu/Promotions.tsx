import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type TPromotionsProps = {
  openSales: boolean;
  setOpenSales: (value: boolean) => void;
};

export default function Promotions({
  openSales,
  setOpenSales,
}: TPromotionsProps) {
  return (
    <div className="flex gap-10" onMouseLeave={() => setOpenSales(false)}>
      <ul className="flex flex-col gap-5">
        <Link href="/stocks">Акции</Link>
        <Link
          onMouseEnter={() => setOpenSales(true)}
          className={clsx(
            "transition-all duration-300",
            openSales &&
              "px-2.5 py-1.25 bg-accent rounded-[30px] flex items-center gap-2.5",
          )}
          href="/sale"
        >
          Распродажа
          {openSales && (
            <Image
              src="/chevron-right.svg"
              width={14}
              height={14}
              alt="Распродажа"
            />
          )}
        </Link>
      </ul>
      {openSales && (
        <ul className="flex flex-col gap-2.5 pt-12.25">
          {[
            { name: "Прованс", href: "/sale?category=provans" },
            { name: "Современный", href: "/sale?category=modern" },
            { name: "Неоклассика", href: "/sale?category=neoclassic" },
          ].map((link) => (
            <Link key={link.href} href={link.href}>
              {link.name}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
