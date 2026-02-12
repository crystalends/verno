import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import clsx from "clsx";
import { Select as SelectPrimitive } from "radix-ui";

export type TSortOption = {
  name: string;
  href: string;
};

type TSortProps = React.ComponentProps<typeof SelectPrimitive.Root> & {
  options: TSortOption[];

  selectTriggerProps?: React.ComponentPropsWithoutRef<
    typeof SelectPrimitive.Trigger
  >;
  selectValueProps?: React.ComponentPropsWithoutRef<
    typeof SelectPrimitive.Value
  >;

  placeholder?: React.ReactNode;

  contentProps?: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>;
};

export default function Sort({
  options,
  selectTriggerProps,
  selectValueProps,
  placeholder = "Сортировать по",
  contentProps,
  ...rootProps
}: TSortProps) {
  const { className: triggerClassName, ...triggerRest } =
    selectTriggerProps ?? {};
  const { className: contentClassName, ...contentRest } = contentProps ?? {};

  return (
    <Select {...rootProps}>
      <SelectTrigger
        className={clsx("border-none shadow-none", triggerClassName)}
        {...triggerRest}
      >
        <SelectValue
          placeholder={placeholder}
          className={clsx(
            "font-circe text-[18px] rounded-none",
            selectValueProps?.className,
          )}
          {...selectValueProps}
        />
      </SelectTrigger>

      <SelectContent className={contentClassName} {...contentRest}>
        {options.map((option) => (
          <SelectItem key={option.name} value={option.name}>
            {option.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
