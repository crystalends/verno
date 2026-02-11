import FavoriteIcon from "@/app/_components/icons/FavoriteIcon";
import { Button, buttonVariants } from "@/app/_components/ui/button";
import { VariantProps } from "class-variance-authority";
import clsx from "clsx";

export default function FavoriteButton(
  props: Omit<
    React.ComponentProps<"button"> &
      VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
      },
    "children"
  >,
) {
  const { className, ...restProps } = props;

  return (
    <Button
      size="icon"
      variant="outline"
      className={clsx(
        "min-h-fit text-foreground border-foreground hover:border-primary",
        className,
      )}
      {...restProps}
    >
      <FavoriteIcon />
    </Button>
  );
}
