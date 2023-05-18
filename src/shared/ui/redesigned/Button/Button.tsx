import { ButtonHTMLAttributes, memo } from 'react';

import { classNames } from '@/shared/lib';
import { Additional, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

type ButtonVariant =
  | 'clear'
  | 'clearInverted'
  | 'outlined'
  | 'ontlinedRed'
  | 'background'
  | 'backgroundInverted'
  | 'outlinedInverted';

type ButtonSize = 'small' | 'large' | 'extraLarge';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  square?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Button: React.FC<ButtonProps> = memo((props) => {
  const { className, children, variant = 'clear', square, disabled, size = 'small', fullWidth, ...otherProps } = props;

  const mods: Mods = {
    [cls.square]: square,
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
