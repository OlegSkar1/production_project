import { InputHTMLAttributes, memo, useEffect, useRef } from 'react';

import cls from './Input.module.scss';

import { classNames } from 'shared/lib';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'disabled'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  readonly?: boolean;
}

export const Input: React.FC<InputProps> = memo((props) => {
  const { className, value, onChange, type = 'text', label, autoFocus, readonly, ...otherProps } = props;
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
    <div className={classNames(cls.inputWrapper, [className], { [cls.readonly]: readonly })}>
      {label && <div>{label}</div>}
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={cls.input}
        disabled={readonly}
        {...otherProps}
      />
    </div>
  );
});
