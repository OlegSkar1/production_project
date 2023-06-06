import { FC, HTMLAttributes, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Card.module.scss';

type CardVariant = 'normal' | 'outlined' | 'light';

type CardPadding = '0' | '8' | '16' | '24';
type CardRound = 'round' | 'default';
type TagNameType = keyof HTMLElementTagNameMap;

interface CardProps extends HTMLAttributes<ValueOf<HTMLElementTagNameMap>> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  border?: CardRound;
  max?: boolean;
  tagname?: TagNameType;
}

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'p0',
  '8': 'p8',
  '16': 'p16',
  '24': 'p24',
};

export const Card: FC<CardProps> = (props) => {
  const {
    className,
    children,
    max,
    variant = 'normal',
    padding = '24',
    border = 'round',
    tagname: Tag = 'div',
    ...otherProps
  } = props;

  const paddingClass = mapPaddingToClass[padding];

  const additional = [className, cls[variant], cls[paddingClass], cls[border]];

  return (
    <Tag className={classNames('', additional, { [cls.max]: max })} {...otherProps}>
      {children}
    </Tag>
  );
};
