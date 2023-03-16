import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.imageBlockWrapper, [className], {})}>
      <img src={block.src} alt={block.title} />
      {block.title && <Text text={block.title} align='center' />}
    </div>
  );
});
