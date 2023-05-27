import { InputHTMLAttributes, ReactNode, memo, useEffect, useRef, useState } from 'react';

import { HStack } from '../Stack';
import { Text } from '../Text';

import { classNames } from '@/shared/lib';
import { Mods } from '@/shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'disabled' | 'size'>;

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  readonly?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  size?: InputSize;
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
    addonLeft,
    addonRight,
    placeholder,
    size = 'm',
    ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref?.current?.focus();
    }
  }, [autoFocus]);

  const mods: Mods = {
    [cls.readonly]: readonly,
    [cls.focused]: isFocused,
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight),
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const input = (
    <div className={classNames(cls.inputWrapper, [className, cls[size]], mods)}>
      {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
      <input
        placeholder={placeholder}
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        onFocus={onFocus}
        onBlur={onBlur}
        className={classNames(cls.input, [], { [cls.readonly]: readonly })}
        disabled={readonly}
        {...otherProps}
      />
      {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
    </div>
  );

  if (label) {
    return (
      <HStack gap='8'>
        <Text text={label} />
        {input}
      </HStack>
    );
  }

  return input;
});
