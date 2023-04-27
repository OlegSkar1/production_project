import { FC, HTMLAttributes, ReactNode } from 'react';

import cls from './Card.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

type CardVariant = 'normal' | 'outlined';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
}

export const Card: FC<CardProps> = (props) => {
  const { className, children, variant = 'normal', ...otherProps } = props;

  return (
    <div className={classNames(cls.card, [className, cls[variant]], {})} {...otherProps}>
      {children}
    </div>
  );
};
