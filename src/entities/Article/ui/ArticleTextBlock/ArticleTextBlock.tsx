import { FC, memo } from 'react';

import cls from './ArticleTextBlock.module.scss';

import { TextBlock } from '../../model/types/article';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui';

interface ArticleTextBlockProps {
  className?: string;
  block: TextBlock;
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = memo((props) => {
  const { className, block } = props;

  return (
    <section className={classNames(cls.articleTextBlock, [className], {})}>
      {block.title && <Text title={block.title} className={cls.textBlockTitle} />}
      <div className={cls.paragraphWrapper}>
        {block.paragraph.map((str) => (
          <Text text={str} key={str} className={cls.textBlockParagraph} />
        ))}
      </div>
    </section>
  );
});
