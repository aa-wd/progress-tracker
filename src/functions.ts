const convertToRadians = (percentage: number) =>  (2 * Math.PI  / 100) * percentage + 0.5 * Math.PI;

const getUnitCircleXCoordinates = (percentage: number) => -1 * Math.cos(convertToRadians(percentage));
const getUnitCircleYCoordinates = (percentage: number) => Math.sin(convertToRadians(percentage));

const getXCoordinate = (percentage: number) => 50 + getUnitCircleXCoordinates(percentage) * 50;
const getYCoordinate = (percentage: number) => 50 - getUnitCircleYCoordinates(percentage) * 50;

export const getCoordinates = (percentage: number) => [
  getXCoordinate(percentage), getYCoordinate(percentage)
];
