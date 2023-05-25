import { FC, HTMLAttributes, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Card.module.scss';

type CardVariant = 'normal' | 'outlined';

type CardPadding = '0' | '8' | '16' | '24';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
}

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'p0',
  '8': 'p8',
  '16': 'p16',
  '24': 'p24',
};

export const Card: FC<CardProps> = (props) => {
  const { className, children, variant = 'normal', padding = '24', ...otherProps } = props;

  const paddingClass = mapPaddingToClass[padding];

  return (
    <div className={classNames(cls.card, [className, cls[variant], cls[paddingClass]], {})} {...otherProps}>
      {children}
    </div>
  );
};
