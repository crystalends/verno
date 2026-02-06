import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export type TBreadcrumb = {
  value: string;
  href?: string;
};

type TBreadcrumbsProps = {
  breadcrumbs: TBreadcrumb[];
};

export default function Breadcrumbs({ breadcrumbs }: TBreadcrumbsProps) {
  return (
    <div className="flex gap-0.5 flex-wrap">
      {breadcrumbs.map(({ value, href }, index) => {
        const children = (
          <>
            {index > 0 ? (
              "/ "
            ) : (
              <Image src="/Up 1.svg" width={13} height={13} alt={value} />
            )}
            {value}
          </>
        );

        const className = clsx(
          "text-[14px] font-circe flex font-medium items-center",
          index > 0 && "text-[#A3ACAC]",
        );

        return (
          <>
            {href ? (
              <Link className={className} href={href}>
                {children}
              </Link>
            ) : (
              <span className={className}>{children}</span>
            )}
          </>
        );
      })}
    </div>
  );
}
