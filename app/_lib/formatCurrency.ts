export function formatCurrency(
  amount: number,
  currency: string,
  locale: string = "ru-RU",
): string {
  const hasCents = amount % 1 !== 0;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: hasCents ? 2 : 0,
  }).format(amount);
}
