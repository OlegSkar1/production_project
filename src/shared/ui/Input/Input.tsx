import { InputHTMLAttributes, memo, useEffect, useRef } from 'react';

import cls from './Input.module.scss';

import { classNames } from 'shared/lib';
import { Mods } from 'shared/lib/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'disabled'>;
type InputVariant = 'default' | 'clear' | 'inverted';

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  readonly?: boolean;
  variant?: InputVariant;
}

export const Input: React.FC<InputProps> = memo((props) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    label,
    autoFocus,
    readonly,
    variant = 'default',
    ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autoFocus) {
      ref?.current?.focus();
    }
  }, [autoFocus]);

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  return (
    <div className={classNames(cls.inputWrapper, [className], {})}>
      {label && <span>{label}</span>}
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={classNames(cls.input, [className, cls[variant]], mods)}
        disabled={readonly}
        {...otherProps}
      />
    </div>
  );
});
