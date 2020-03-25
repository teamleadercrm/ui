export const bindToMinMax = (value, min, max) => Math.min(Math.max(value, min), max);

export const parseValue = (value, min, max) => bindToMinMax(toNumber(value), min, max);

export const toNumber = (rawNumber) => {
  let number = parseFloat(rawNumber);
  if (isNaN(number) || !isFinite(number)) {
    number = 0;
  }
  return number;
};
