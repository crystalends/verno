import BuyForm from "@/app/_components/Buy/BuyForm";
import FormWrapper from "@/app/_components/shared/FormWrapper";

type TBuyProps = {
  className?: string;
  imageWidth?: number;
};

export default function Buy({
  className,
  imageWidth,
}: TBuyProps) {
  return (
    <FormWrapper
      className={className}
      title="Купить товар"
      description="Ocтaвьтe cвoи кoнтaкты, нaш мeнeджep cвяжeтcя c Вaми и paзpaбoтaeт пepcoнaльный пpoeкт Вaшeй куxни"
      imageProps={{
        alt: "Buy",
        width: imageWidth,
      }}
    >
      <BuyForm />
    </FormWrapper>
  );
}
