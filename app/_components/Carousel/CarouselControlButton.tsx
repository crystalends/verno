import { Button, buttonVariants } from "@/app/_components/ui/button";
import { VariantProps } from "class-variance-authority";
import clsx from "clsx";

export default function CarouselControlButton(
  props: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
    } = {},
) {
  const { className, ...restProps } = props;

  const controlStyles = clsx(
    "w-fit border-[#040505] border rounded-[10px] w-[34px] min-h-[34px] !p-1.25",
    className,
  );

  return (
    <Button
      variant="ghost"
      className={controlStyles}
      size="icon"
      {...restProps}
    />
  );
}
