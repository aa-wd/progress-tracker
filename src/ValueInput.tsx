import React from 'react';

interface ValueInputProps {
  percentage: number | '';
  changePercentage: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ValueInput: React.FunctionComponent<ValueInputProps> = ({
  changePercentage, percentage
}) => (
  <div>
    <input onChange={changePercentage} value={percentage} />
  </div>
);

export default ValueInput;
