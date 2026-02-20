import OrderDesignProjectModal from "@/app/_components/DesignProject/OrderDesignProjectModal";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="w-full h-170 bg-center bg-cover bg-[url('/50d14816a6d236b1b60410aa70a6d20dd8c5f48e.webp')] flex flex-col justify-end py-5 md:py-17">
      <div className="wrapper-narrow">
        <>
          <h1 className="text-[400px] select-none hidden md:block absolute top-55 text-primary font-bold">
            404
          </h1>
          <div className="p-5 md:left-13.5 relative bg-[#918A861A] backdrop-blur-2xl md:max-w-152.5 w-full flex flex-col gap-5 rounded-[20px]">
            <h1 className="text-4xl md:text-center w-full md:text-5xl font-medium text-white leading-15">
              Страница не найдена
            </h1>
            <div className="flex gap-5 flex-wrap md:flex-nowrap">
              <OrderDesignProjectModal
                triggerSlot={
                  <Button className="md:w-fit bg-white text-primary hover:text-white">
                    Получить консультацию
                  </Button>
                }
              />
              <Button
                asChild
                className="md:w-fit border-white hover:border-primary text-white"
                variant="outline"
              >
                <Link href="/">Вернуться на главную</Link>
              </Button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
