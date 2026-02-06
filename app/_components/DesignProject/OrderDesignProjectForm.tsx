"use client";

import { Button } from "@/app/_components/ui/button";
import { Checkbox } from "@/app/_components/ui/checkbox";
import { Field } from "@/app/_components/ui/field";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import ReactSelect from "@/app/_components/ui/react-select";
import { Textarea } from "@/app/_components/ui/textarea";

export default function OrderDesignProjectForm() {
  return (
    <form className="flex flex-col gap-5">
      <div className="flex flex-col gap-2.5">
        <div className="flex gap-5">
          <Input placeholder="Имя" />
          <Input placeholder="Телефон" />
        </div>
        <ReactSelect placeholder="Адрес магазина" />
        <Textarea placeholder="Ваше сообщение" />
      </div>
      <Field orientation="horizontal">
        <Checkbox id="terms-checkbox" name="terms-checkbox" />
        <Label htmlFor="terms-checkbox">
          Xoчу пoлучить плaн «Kaк пoдгoтoвитьcя к зaкaзу куxни»
        </Label>
      </Field>
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
