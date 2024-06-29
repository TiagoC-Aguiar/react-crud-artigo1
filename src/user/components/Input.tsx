import { FC, InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const Input: FC<InputProps> = ({ label, ...rest }) => {
  return (
    <label>
      {label}
      <input type="text" {...rest} />
    </label>
  );
};

export default Input;
