import { FC, memo } from 'react';

import AppSvg from '../../assets/icons/appIcon.svg';
import { HStack } from '../deprecated/Stack/HStack/HStack';

import { classNames } from '@/shared/lib';

import cls from './AppLogo.module.scss';

interface AppLogoProps {
  className?: string;
}

export const AppLogo: FC<AppLogoProps> = memo((props) => {
  const { className } = props;

  return (
    <HStack max justify='center' className={classNames(cls.appLogoWrapper, [className], {})}>
      <AppSvg width={50} height={50} />
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
    </HStack>
  );
});
