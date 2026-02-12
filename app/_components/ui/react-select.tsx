import Select, {
  GroupBase,
  Props as ReactSelectProps,
  StylesConfig,
} from "react-select";
import { cn } from "@/app/_lib/utils";

type SelectProps<T> = ReactSelectProps<T>;

export default function ReactSelect<T>(props: SelectProps<T>) {
  const styles: StylesConfig<T, boolean, GroupBase<T>> = {
    container: (base) => ({
      ...base,
      boxShadow: "none",
      borderRadius: 0,
    }),
    control: (base, state) => ({
      ...base,
      fontFamily: "var(--font-circe), sans-serif",
      backgroundColor: "transparent",
      minHeight: "49px",
      height: "100%",
      width: "100%",
      borderRadius: 0,
      border: "none",
      borderBottom: state.isFocused
        ? "1px solid var(--primary)"
        : "1px solid #A09790",
      boxShadow: "none",
      transition: "colors 0.2s",
      "&:hover": {
        borderColor: state.isFocused ? "var(--primary)" : "#A09790",
      },
    }),
    valueContainer: (base) => ({
      ...base,
      padding: "0px 5px",
    }),
    input: (base) => ({
      ...base,
      margin: 0,
      padding: 0,
      color: "inherit",
    }),
    placeholder: (base) => ({
      ...base,
      color: "var(--muted-foreground)",
      fontSize: "inherit",
      textAlign: "left",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#A09790",
      "&:hover": {
        color: "var(--primary)",
      },
    }),
    menu: (base) => ({
      ...base,
      borderRadius: "4px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      zIndex: 9999,
    }),
    option: (base, state) => ({
      ...base,
      fontSize: "16px",
      backgroundColor: state.isSelected
        ? "var(--primary)"
        : state.isFocused
          ? "rgba(160, 151, 144, 0.1)"
          : "transparent",
      color: state.isSelected ? "white" : "#111827",
      cursor: "pointer",
      "&:active": {
        backgroundColor: "rgba(160, 151, 144, 0.2)",
      },
    }),
  };

  return (
    <Select
      {...props}
      className={cn("font-circe text-base md:text-sm", props.className)}
      styles={styles}
    />
  );
}
