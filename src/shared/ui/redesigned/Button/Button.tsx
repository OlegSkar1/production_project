import { ButtonHTMLAttributes, ReactNode, forwardRef, ForwardedRef } from 'react';

import { classNames } from '@/shared/lib';
import { Additional, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

type ButtonVariant = 'clear' | 'outlined' | 'outlinedSave' | 'outlinedCancel' | 'clearIcon' | 'filled' | 'light';

type WeightVariant = 'normal' | 'bold';

type ButtonFontSize = 'small' | 'large' | 'extraLarge';

type ButtonSize = 's' | 'm' | 'l';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  fontSize?: ButtonFontSize;
  size?: ButtonSize;
  weight?: WeightVariant;
  disabled?: boolean;
  fullWidth?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
}

export const Button: React.FC<ButtonProps> = forwardRef((props, ref: ForwardedRef<HTMLButtonElement>) => {
  const {
    className,
    children,
    variant = 'clear',
    disabled,
    fontSize = 'small',
    size = 'm',
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

  const additional: Additional = [className, cls[variant], cls[fontSize], cls[size], cls[weight]];

  return (
    <button className={classNames(cls.button, additional, mods)} disabled={disabled} {...otherProps} ref={ref}>
      {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
      {children}
      {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
    </button>
  );
});
