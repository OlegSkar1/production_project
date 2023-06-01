import { FC, memo } from 'react';

import { ImageBlock } from '../../model/types/article';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleImageBlockProps {
  className?: string;
  block: ImageBlock;
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = memo((props) => {
  const { block, className } = props;

  return (
    <VStack tagname='figure' gap='16' align='center' className={classNames('', [className], {})}>
      <img src={block.src} alt={block.title} />
      <figcaption>
        {block.title && (
          <ToggleFeature
            name='isAppRedesigned'
            off={<TextDeprecated text={block.title} align='center' />}
            on={<Text text={block.title} align='center' />}
          />
        )}
      </figcaption>
    </VStack>
  );
});
