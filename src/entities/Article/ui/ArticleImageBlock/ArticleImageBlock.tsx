import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ArticleImageBlock.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleImageBlockProps {
  className?: string;
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation();

  return <div className={classNames(cls.articleImageBlock, [className], {})}>ArticleImageBlock</div>;
});
