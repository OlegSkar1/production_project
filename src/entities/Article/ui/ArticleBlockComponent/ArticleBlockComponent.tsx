import { FC, memo } from 'react';

import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import cls from '../ArticleDetails/ArticleDetails.module.scss';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';

import { classNames } from '@/shared/lib';

interface ArticleBlockComponentProps {
  className?: string;
  block: ArticleBlock;
}

export const ArticleBlockComponent: FC<ArticleBlockComponentProps> = memo((props) => {
  const { block, className } = props;

  switch (block.type) {
    case 'CODE':
      return <ArticleCodeBlock block={block} key={block.id} className={classNames(cls.code, [className], {})} />;
    case 'IMAGE':
      return <ArticleImageBlock className={className} block={block} key={block.id} />;
    case 'TEXT':
      return <ArticleTextBlock className={className} block={block} key={block.id} />;
    default:
      return null;
  }
});
