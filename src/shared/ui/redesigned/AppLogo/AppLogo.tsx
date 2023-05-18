import { FC, memo } from 'react';

import AppSvg from '../../../assets/icons/appIcon.svg';
import { HStack } from '../../deprecated/Stack/HStack/HStack';

import { classNames } from '@/shared/lib';

import cls from './AppLogo.module.scss';

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo: FC<AppLogoProps> = memo((props) => {
  const { className, size } = props;

  return (
    <HStack max justify='center' className={classNames(cls.appLogoWrapper, [className], {})}>
      <AppSvg width={size} height={size} />
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
    </HStack>
  );
});
