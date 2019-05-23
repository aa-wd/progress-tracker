const convertToRadians = (percentage: number) =>
  ((2 * Math.PI) / 100) * percentage + 0.5 * Math.PI;

export const getXCoordinate = (percentage: number) =>
  -1 * Math.cos(convertToRadians(percentage));
export const getYCoordinate = (percentage: number) =>
  Math.sin(convertToRadians(percentage));
