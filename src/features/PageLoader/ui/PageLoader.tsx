import cls from './PageLoader.module.scss';

import { classNames } from 'shared/lib';
import { Loader } from 'shared/ui';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.pageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
