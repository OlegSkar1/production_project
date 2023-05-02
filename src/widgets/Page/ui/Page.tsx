import { FC, MutableRefObject, ReactNode, UIEventHandler, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { StateSchema } from '@/app/providers/StoreProvider';
import { getScrollByPath, scrollSaveActions } from '@/features/ScrollSave';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll';
import { useInitEffect } from '@/shared/lib/hooks/useInitEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle';

import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
  isLoading?: boolean;
}

export const Page: FC<PageProps> = (props) => {
  const { className, children, onScrollEnd, isLoading } = props;

  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname));

  const dispatch = useAppDispatch();

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const targetRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({ targetRef, wrapperRef, callback: onScrollEnd, isLoading });

  const onScroll: UIEventHandler<HTMLElement> = useThrottle((e) => {
    dispatch(scrollSaveActions.setScrollPosition({ path: pathname, position: e.currentTarget.scrollTop }));
  }, 500);

  useInitEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  return (
    <section ref={wrapperRef} className={classNames(cls.page, [className], {})} onScroll={onScroll}>
      {children}
      {onScrollEnd ? <div className={cls.trigger} ref={targetRef} /> : null}
    </section>
  );
};
