"use client";

import { Button } from "@/app/_components/ui/button";
import { Checkbox } from "@/app/_components/ui/checkbox";
import { Field } from "@/app/_components/ui/field";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";

export default function BuyForm() {
  return (
    <form className="flex flex-col gap-5">
      <div className="flex flex-wrap sm:flex-nowrap gap-5">
        <Input placeholder="Имя" />
        <Input placeholder="Телефон" />
      </div>
      <div className="flex gap-5 flex-wrap xl:flex-nowrap">
        <Field orientation="horizontal">
          <Checkbox id="terms-checkbox" name="terms-checkbox" />
          <Label htmlFor="terms-checkbox">
            Даю согласие на обработку персональных данных
          </Label>
        </Field>
        <Button className="xl:w-fit w-full">Отправить</Button>
      </div>
    </form>
  );
}
