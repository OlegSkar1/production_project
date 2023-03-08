import { memo } from 'react';

import cls from './Avatar.module.scss';

import { classNames } from 'shared/lib';

type AvatarSize = 'normal' | 'small';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: AvatarSize;
}

export const Avatar: React.FC<AvatarProps> = memo((props) => {
  const { className, src, size = 'normal', alt } = props;

  return <img src={src} alt={alt} className={classNames(cls.avatar, [className, cls[size]], {})} />;
});
