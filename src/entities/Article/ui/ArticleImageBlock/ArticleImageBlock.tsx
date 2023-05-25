import { FC, memo } from 'react';

import { ImageBlock } from '../../model/types/article';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ArticleImageBlockProps {
  className?: string;
  block: ImageBlock;
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = memo((props) => {
  const { block, className } = props;

  return (
    <VStack tagname='figure' gap='16' align='center' className={classNames('', [className], {})}>
      <img src={block.src} alt={block.title} />
      <figcaption>{block.title && <TextDeprecated text={block.title} align='center' />}</figcaption>
    </VStack>
  );
});
