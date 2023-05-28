import { FC, HTMLAttributes, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Card.module.scss';

type CardVariant = 'normal' | 'outlined' | 'light';

type CardPadding = '0' | '8' | '16' | '24';
type CardRound = 'round' | 'default';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  border?: CardRound;
  max?: boolean;
}

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'p0',
  '8': 'p8',
  '16': 'p16',
  '24': 'p24',
};

export const Card: FC<CardProps> = (props) => {
  const { className, children, max, variant = 'normal', padding = '24', border = 'round', ...otherProps } = props;

  const paddingClass = mapPaddingToClass[padding];

  return (
    <div
      className={classNames('', [className, cls[variant], cls[paddingClass], cls[border]], { [cls.max]: max })}
      {...otherProps}
    >
      {children}
    </div>
  );
};
