import { alignClasses, FlexProps, gapClasses, justifyClasses } from '../Flex/Flex';
import cls from '../Flex/Flex.module.scss';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

type GetHStackType = Omit<FlexProps, 'className' | 'children' | 'tagname' | 'direction'>;

export const getHStack = (props: GetHStackType) => {
  const { align = 'center', gap, justify = 'start', max } = props;

  const classes = [cls.flex, justifyClasses[justify], alignClasses[align], cls.directionRow, gap && gapClasses[gap]];

  const mods: Mods = {
    [cls.max]: max,
  };

  return classNames('', classes, mods);
};
