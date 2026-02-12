import Buy from "@/app/_components/Buy/Buy";
import { Button } from "@/app/_components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/app/_components/ui/dialog";
import { VisuallyHidden } from "radix-ui";

type TBuyModalProps = {
  triggerSlot?: React.ReactNode;
};

export default function BuyModal({
  triggerSlot = <Button className="w-fit">Купить</Button>,
}: TBuyModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{triggerSlot}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <VisuallyHidden.Root>
            <DialogTitle>Купить</DialogTitle>
          </VisuallyHidden.Root>
          <Buy />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
