import { FC, memo } from 'react';

import { TextBlock } from '../../model/types/article';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleTextBlockProps {
  className?: string;
  block: TextBlock;
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = memo((props) => {
  const { className, block } = props;

  return (
    <ToggleFeature
      name='isAppRedesigned'
      off={
        <VStack tagname='section' gap='8' align='start' className={classNames('', [className], {})}>
          {block.title && <TextDeprecated tagname='h3' title={block.title} />}
          <VStack align='start' gap='4'>
            {block.paragraph.map((str) => (
              <TextDeprecated text={str} key={str} />
            ))}
          </VStack>
        </VStack>
      }
      on={
        <VStack tagname='section' gap='8' align='start' className={classNames('', [className], {})}>
          {block.title && <Text tagname='h3' title={block.title} />}
          <VStack align='start' gap='4'>
            {block.paragraph.map((str) => (
              <Text text={str} key={str} />
            ))}
          </VStack>
        </VStack>
      }
    />
  );
});
