export type TPluralOptions = {
  one: React.ReactNode;
  few: React.ReactNode;
  many: React.ReactNode;
  other?: React.ReactNode;
};

export const pluralize = (
  count: number,
  options: TPluralOptions
): React.ReactNode => {
  const absCount = Math.abs(count);
  const lastDigit = absCount % 10;
  const lastTwoDigits = absCount % 100;

  if (!Number.isInteger(absCount)) {
    return options.other ?? options.many;
  }

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return options.many;
  }
  if (lastDigit === 1) {
    return options.one;
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return options.few;
  }

  return options.many;
};
