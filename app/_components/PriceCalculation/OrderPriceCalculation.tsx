import OrderPriceCalculationForm from "@/app/_components/PriceCalculation/OrderPriceCalculationForm";
import FormWrapper from "@/app/_components/shared/FormWrapper";

type TOrderPriceCalculationProps = {
  className?: string;
  imageWidth?: number;
};

export default function OrderPriceCalculation({
  className,
  imageWidth,
}: TOrderPriceCalculationProps) {
  return (
    <FormWrapper
      className={className}
      title="Заказать расчет цены"
      description="Ocтaвьтe cвoи кoнтaкты, нaш мeнeджep cвяжeтcя c Вaми и paзpaбoтaeт пepcoнaльный пpoeкт Вaшeй куxни"
      imageProps={{
        alt: "Order price calculation",
        width: imageWidth,
      }}
    >
      <OrderPriceCalculationForm />
    </FormWrapper>
  );
}
