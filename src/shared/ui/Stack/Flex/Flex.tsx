import { FC, ReactNode, memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './Flex.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';

type FlexJustify = 'start' | 'center' | 'end' | 'beetwen';

type FlexAlign = 'start' | 'center' | 'end';

type FlexDirection = 'row' | 'column';

type FlexGap = '4' | '8' | '16' | '32';

interface FlexProps {
  className?: string;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  children?: ReactNode;
}

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  beetwen: cls.justifyBeetwen,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.AlignStart,
  center: cls.AlignCenter,
  end: cls.AlignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32,
};

export const Flex: FC<FlexProps> = (props) => {
  const { className, children, justify = 'start', align = 'center', direction = 'row', gap } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  return <div className={classNames(cls.flex, classes, {})}>{children}</div>;
};
