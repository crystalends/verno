import { Button } from "@/app/_components/ui/button";
import clsx from "clsx";
import { HTMLAttributes } from "react";

type TSpecialOfferProps = {
  title: string;
  rightContent?: React.ReactNode;
  buttonProps?: HTMLAttributes<HTMLButtonElement>;
};

export default function SpecialOffer({
  title,
  rightContent,
  buttonProps = {},
}: TSpecialOfferProps) {
  const { className: buttonClassName, ...restButtonProps } = buttonProps;

  return (
    <div className="bg-[#F0E2D7] relative overflow-hidden flex rounded-[20px] min-h-50">
      <div className="p-5 z-10 flex flex-col justify-end h-full gap-5">
        <h3 className="text-2xl max-w-87">{title}</h3>
        <Button
          size="sm"
          className={clsx("!min-w-55 w-fit", buttonClassName)}
          {...restButtonProps}
        >
          Получить скидку
        </Button>
      </div>
      {rightContent}
    </div>
  );
}
