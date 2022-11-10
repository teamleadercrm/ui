export const bindToMinMax = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
export const toNumber = (rawNumber: string | number) => {
  let number = parseFloat(`${rawNumber}`);
  if (isNaN(number) || !isFinite(number)) {
    number = 0;
  }
  return number;
};

export const parseValue = (value: number, min: number, max: number) => bindToMinMax(toNumber(value), min, max);
