import { FC, MutableRefObject, ReactNode, useRef } from 'react';

import cls from './Page.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
  isLoading?: boolean;
}

export const Page: FC<PageProps> = (props) => {
  const { className, children, onScrollEnd, isLoading } = props;

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const targetRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({ targetRef, wrapperRef, callback: onScrollEnd, isLoading });

  return (
    <section ref={wrapperRef} className={classNames(cls.page, [className], {})}>
      {children}
      <div ref={targetRef} />
    </section>
  );
};
