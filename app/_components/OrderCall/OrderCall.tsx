import OrderCallForm from "@/app/_components/OrderCall/OrderCallForm";
import FormWrapper from "@/app/_components/shared/FormWrapper";

type TOrderCallProps = {
  className?: string;
  imageWidth?: number;
};

export default function OrderCall({ className, imageWidth }: TOrderCallProps) {
  return (
    <FormWrapper
      className={className}
      title="Зaкaзaть звонок"
      description="Ocтaвьтe cвoи кoнтaкты, нaш мeнeджep cвяжeтcя c Вaми и paзpaбoтaeт пepcoнaльный пpoeкт Вaшeй куxни"
      imageProps={{
        alt: "Order call",
        width: imageWidth,
      }}
    >
      <OrderCallForm />
    </FormWrapper>
  );
}
