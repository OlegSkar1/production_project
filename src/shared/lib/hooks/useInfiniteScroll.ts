import { MutableRefObject, useEffect } from 'react';

interface UseInfiniteScrollProps {
  wrapperRef: MutableRefObject<HTMLElement>;
  targetRef: MutableRefObject<HTMLElement>;
  callback?: () => void;
  isLoading?: boolean;
}

export const useInfiniteScroll = (props: UseInfiniteScrollProps) => {
  const { targetRef, wrapperRef, callback, isLoading } = props;

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const targetElement = targetRef.current;
    const wrapperElement = wrapperRef.current;

    if (callback && !isLoading) {
      const options = {
        root: wrapperElement,
        rootMargin: '20px 20px 20px 45px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(targetElement);
    }

    return () => {
      if (observer && targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, [callback, targetRef, wrapperRef]);
};
