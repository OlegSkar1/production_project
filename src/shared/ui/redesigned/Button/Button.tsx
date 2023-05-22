import { ButtonHTMLAttributes, memo } from 'react';

import { classNames } from '@/shared/lib';
import { Additional, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

type ButtonVariant = 'clear' | 'outlined';

type ButtonSize = 'small' | 'large' | 'extraLarge';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = memo((props) => {
  const { className, children, variant = 'clear', disabled, size = 'small', fullWidth, ...otherProps } = props;

  const mods: Mods = {
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
  };

  const additional: Additional = [className, cls[variant], cls[size]];

  return (
    <button className={classNames(cls.button, additional, mods)} disabled={disabled} {...otherProps}>
      {children}
    </button>
  );
});
