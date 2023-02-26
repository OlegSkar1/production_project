import { ButtonHTMLAttributes } from 'react';

import cls from './Button.module.scss';

import { classNames } from 'shared/lib';

type ButtonVariant = 'clear' | 'clearInverted' | 'outlined' | 'background' | 'backgroundInverted' | 'outlinedInverted';

type ButtonSize = 'small' | 'large' | 'extraLarge';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  square?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, variant, square, disabled, size = 'small', ...otherProps } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  };

  const additional = [className, cls[variant], cls[size]];

  return (
    <button className={classNames(cls.button, additional, mods)} disabled={disabled} {...otherProps}>
      {children}
    </button>
  );
};
