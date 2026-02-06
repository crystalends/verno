import Breadcrumbs, { TBreadcrumb } from "@/app/_components/ui/breadcrumbs";

export default function KitchensPage() {
  const breadcrumbs: TBreadcrumb[] = [
    { value: "Главная", href: "/" },
    { value: "Kitchen", href: "/kitchen" },
  ];

  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </div>
  );
}
