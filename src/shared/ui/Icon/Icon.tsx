import { FC, memo, SVGProps, VFC } from 'react';

import cls from './Icon.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  Svg: VFC<SVGProps<SVGSVGElement>>;
}

export const Icon: FC<IconProps> = memo((props) => {
  const { Svg, className, ...otherProps } = props;

  return <Svg className={classNames(cls.icon, [className], {})} {...otherProps} />;
});
