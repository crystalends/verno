import CityButton from "@/app/_components/Header/CityButton";
import CitySelector from "@/app/_components/Header/CitySelector";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion";
import { Button } from "@/app/_components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";
import { navigationLinks } from "@/app/_data/navigationLinks";
import { Menu } from "lucide-react";
import Link from "next/link";
import { VisuallyHidden } from "radix-ui";

export default function NavigationMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <VisuallyHidden.Root>
            <SheetTitle>Мобильное навигационное меню</SheetTitle>
          </VisuallyHidden.Root>
        </SheetHeader>
        <div className="flex flex-col gap-5 px-5 overflow-auto">
          {navigationLinks.map(({ name, href }) => (
            <SheetClose key={href} asChild>
              <Link href={href}>{name}</Link>
            </SheetClose>
          ))}
          <SheetClose asChild>
            <Link href="/favorites">Избранное</Link>
          </SheetClose>
          <Accordion type="single" collapsible>
            <AccordionItem value="cities">
              <AccordionTrigger>Москва</AccordionTrigger>
              <AccordionContent>
                <CitySelector />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
}
