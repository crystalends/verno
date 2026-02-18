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
        <div className="flex flex-wrap sm:flex-nowrap gap-5">
          <Input placeholder="Имя" />
          <Input placeholder="Телефон" />
        </div>
        <ReactSelect placeholder="Адрес магазина" />
        <Textarea placeholder="Ваше сообщение" />
      </div>
      <Field orientation="horizontal">
        <Checkbox id="get-preparation-plan" name="getPreparationPlan" />
        <Label htmlFor="get-preparation-plan">
          Хочу получить план «Как подготовиться к заказу кухни»
        </Label>
      </Field>
      <div className="flex gap-5 flex-wrap xl:flex-nowrap">
        <Field orientation="horizontal">
          <Checkbox
            id="personal-data-consent"
            name="personalDataConsent"
            required
          />
          <Label htmlFor="personal-data-consent">
            Даю согласие на обработку персональных данных
          </Label>
        </Field>
        <Button className="xl:w-fit w-full">Отправить</Button>
      </div>
    </form>
  );
}
