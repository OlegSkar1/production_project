import { ButtonHTMLAttributes } from 'react';

import cls from './Button.module.scss';

import { classNames } from 'shared/lib';

type ButtonVariant = 'clear' | 'outlined';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, variant: theme, ...otherProps } = props;

  return (
    <button className={classNames(cls.button, [className, cls[theme]], {})} {...otherProps}>
      {children}
    </button>
  );
};
