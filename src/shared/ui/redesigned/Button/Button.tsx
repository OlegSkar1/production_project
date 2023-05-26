import { ButtonHTMLAttributes, ReactNode, memo } from 'react';

import { classNames } from '@/shared/lib';
import { Additional, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

type ButtonVariant = 'clear' | 'outlined' | 'clearIcon' | 'filled' | 'light';

type WeightVariant = 'normal' | 'bold';

type ButtonSize = 'small' | 'large' | 'extraLarge';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  weight?: WeightVariant;
  disabled?: boolean;
  fullWidth?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
}

export const Button: React.FC<ButtonProps> = memo((props) => {
  const {
    className,
    children,
    variant = 'clear',
    disabled,
    size = 'small',
    weight = 'normal',
    fullWidth,
    addonLeft,
    addonRight,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight),
  };

  const additional: Additional = [className, cls[variant], cls[size], cls[weight]];

  return (
    <button className={classNames(cls.button, additional, mods)} disabled={disabled} {...otherProps}>
      <div className={cls.addonLeft}>{addonLeft}</div>
      {children}
      <div className={cls.addonRight}>{addonRight}</div>
    </button>
  );
});
