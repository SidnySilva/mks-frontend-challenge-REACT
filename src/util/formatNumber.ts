export const formatNumber = (number: number): string => {
  const numberString = number.toString();
  let result = "";

  for (let i = numberString.length - 1, count = 0; i >= 0; i--, count++) {
    if (count !== 0 && count % 3 === 0) {
      result = "." + result;
    }
    result = numberString[i] + result;
  }

  return result;
};
