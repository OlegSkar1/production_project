import { FC, ReactNode } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';

export type FlexAlign = 'start' | 'center' | 'end' | 'normal';

export type FlexDirection = 'row' | 'column';

export type FlexGap = '4' | '8' | '16' | '24' | '32';

export const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween,
};

export const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd,
  normal: cls.alignNormal,
};

export const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
};

export const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  24: cls.gap24,
  32: cls.gap32,
};

type TagName = keyof JSX.IntrinsicElements;
export interface FlexProps {
  className?: string;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
  children: ReactNode;
  tagname?: TagName;
}

export const Flex: FC<FlexProps> = (props) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    max,
    tagname: TagName = 'div',
    ...otherProps
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  const mods: Mods = {
    [cls.max]: max,
  };

  return (
    <TagName className={classNames(cls.flex, classes, mods)} {...otherProps}>
      {children}
    </TagName>
  );
};
