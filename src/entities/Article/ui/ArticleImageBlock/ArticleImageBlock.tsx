import { FC, memo } from 'react';

import cls from './ArticleImageBlock.module.scss';

import { ImageBlock } from '../../model/types/article';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui';

interface ArticleImageBlockProps {
  className?: string;
  block: ImageBlock;
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = memo((props) => {
  const { block, className } = props;

  return (
    <figure className={classNames(cls.imageBlockWrapper, [className], {})}>
      <img src={block.src} alt={block.title} />
      <figcaption>{block.title && <Text text={block.title} align='center' />}</figcaption>
    </figure>
  );
});
