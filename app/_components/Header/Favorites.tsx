import { Button } from "@/app/_components/ui/button";
import Image from "next/image";

export default function Favorites() {
  return (
    <Button size="icon" variant="ghost" className="min-h-fit">
      <Image src="/Frame 22.svg" alt="Favorites" width={34} height={34} />
    </Button>
  );
}
