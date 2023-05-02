import { classNames } from '@/shared/lib';
import { HStack, Loader } from '@/shared/ui';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = (props) => {
  const { className } = props;

  return (
    <HStack justify='center' className={classNames(cls.pageLoader, [className], {})}>
      <Loader />
    </HStack>
  );
};
