import { FC, memo } from 'react';

import { ScrollTopButton } from '@/features/ScrollTopButton';
import { classNames } from '@/shared/lib';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ScrollToolbar.module.scss';

interface ScrollToolbarProps {
  className?: string;
}

export const ScrollToolbar: FC<ScrollToolbarProps> = memo((props) => {
  const { className } = props;

  return (
    <VStack justify='center' max className={classNames(cls.scrollToolbar, [className], {})}>
      <ScrollTopButton />
    </VStack>
  );
});
