import { InputHTMLAttributes, useEffect, useRef } from 'react';

import cls from './Input.module.scss';

import { classNames } from 'shared/lib';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
}

export const Input: React.FC<InputProps> = (props) => {
  const { className, value, onChange, type = 'text', label, autoFocus, ...otherProps } = props;
  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autoFocus) {
      ref?.current?.focus();
    }
  }, [autoFocus]);

  return (
    <div className={classNames(cls.inputWrapper, [className], {})}>
      {label && <div className={cls.label}>{label}</div>}
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={cls.input}
        {...otherProps}
      />
    </div>
  );
};
