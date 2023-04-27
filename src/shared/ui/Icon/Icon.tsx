import { FC, memo } from 'react';

import cls from './Icon.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon: FC<IconProps> = memo((props) => {
  const { className, Svg } = props;

  return <Svg className={classNames(cls.icon, [className], {})} />;
});
