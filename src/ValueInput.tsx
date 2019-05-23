import React from 'react';

interface ValueInputProps {
  percentage: number | '';
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ValueInput: React.FunctionComponent<ValueInputProps> = ({
  handleChange, percentage
}) => (
  <div className="progress-tracker__input-container">
    <input onChange={handleChange} value={percentage} placeholder="%" />
  </div>
);

export default ValueInput;
