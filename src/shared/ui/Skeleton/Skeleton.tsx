import { CSSProperties, FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Skeleton.module.scss';

type SkeletonVariants = 'text' | 'title' | 'circle';

interface SkeletonProps {
  className?: string;
  variant?: SkeletonVariants;
  width?: string | number;
  height?: string | number;
}

export const Skeleton: FC<SkeletonProps> = (props) => {
  const { className, variant, width, height } = props;

  const styles: CSSProperties = {
    width,
    height,
  };

  return <div className={classNames(cls.skeleton, [className, variant && cls[variant]], {})} style={styles} />;
};
