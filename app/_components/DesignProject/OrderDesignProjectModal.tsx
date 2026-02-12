import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { Button } from "@/app/_components/ui/button";
import { VisuallyHidden } from "radix-ui";
import OrderDesignProject from "@/app/_components/DesignProject/OrderDesignProject";

type TOrderDesignProjectModalProps = {
  triggerSlot?: React.ReactNode;
};

export default function OrderDesignProjectModal({
  triggerSlot = <Button className="w-fit">Заказать дизайн-проект</Button>,
}: TOrderDesignProjectModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{triggerSlot}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <VisuallyHidden.Root>
            <DialogTitle>Заказать дизайн-проект</DialogTitle>
          </VisuallyHidden.Root>
          <OrderDesignProject />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
