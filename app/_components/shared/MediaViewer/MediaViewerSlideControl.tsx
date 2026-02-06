import { Button, buttonVariants } from "@/app/_components/ui/button";
import { VariantProps } from "class-variance-authority";
import clsx from "clsx";

export default function MediaViewerSlideControl(
  props: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
    },
) {
  const { className, ...restProps } = props;

  return (
    <Button
      variant="ghost"
      className={clsx(
        "group bg-[#FFFFFF66] size-11.25 border border-[#FFFFFF66]",
        className,
      )}
      size="icon"
      {...restProps}
    />
  );
}
