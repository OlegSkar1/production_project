import { classNames } from '@/shared/lib';
import { Loader } from '@/shared/ui';
import { HStack } from '@/shared/ui/redesigned/Stack';

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
