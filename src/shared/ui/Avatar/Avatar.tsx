import { CSSProperties, memo, useMemo } from 'react';

import UserIcon from '../../assets/icons/user-avatar.svg';
import { AppImage } from '../AppImage/AppImage';
import { Icon } from '../Icon/Icon';
import { Skeleton } from '../Skeleton/Skeleton';

import { classNames } from '@/shared/lib';

import cls from './Avatar.module.scss';

type AvatarSize = 'normal' | 'small';

interface AvatarProps {
  className?: string;
  src: string;
  alt: string;
  size?: AvatarSize | number;
}

export const Avatar: React.FC<AvatarProps> = memo((props) => {
  const { className, src, size = 'normal', alt } = props;

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );

  const fallback = <Skeleton variant='circle' width={size} height={size} />;

  const errorFallback = <Icon Svg={UserIcon} width={size} height={size} />;

  return (
    <AppImage
      src={src}
      alt={alt}
      className={classNames(cls.avatar, [className, cls[size]], {})}
      style={styles}
      fallback={fallback}
      errorFallback={errorFallback}
    />
  );
});
