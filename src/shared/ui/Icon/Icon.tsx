import { FC, memo, SVGProps, VFC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  Svg: VFC<SVGProps<SVGSVGElement>>;
}

export const Icon: FC<IconProps> = memo((props) => {
  const { Svg, className, ...otherProps } = props;

  return <Svg className={classNames(cls.icon, [className], {})} {...otherProps} />;
});
