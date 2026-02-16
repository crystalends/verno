import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { Button } from "@/app/_components/ui/button";
import { VisuallyHidden } from "radix-ui";

type TOrderPriceCalculationModalProps = {
  triggerSlot?: React.ReactNode;
};

export default function OrderPriceCalculationModal({
  triggerSlot = <Button className="w-fit">Рассчитать цену проекта</Button>,
}: TOrderPriceCalculationModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{triggerSlot}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <VisuallyHidden.Root>
            <DialogTitle>Рассчитать цену проекта</DialogTitle>
          </VisuallyHidden.Root>
          <OrderPriceCalculationModal />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
