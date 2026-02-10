import FavoriteIcon from "@/app/_components/icons/FavoriteIcon";
import { Button } from "@/app/_components/ui/button";

export default function Favorites() {
  return (
    <Button
      size="icon"
      variant="outline"
      className="min-h-fit text-foreground border-foreground hover:border-primary"
    >
      <FavoriteIcon />
    </Button>
  );
}
