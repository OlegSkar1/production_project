import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ArticleTextBlock.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleTextBlockProps {
  className?: string;
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return <div className={classNames(cls.articleTextBlock, [className], {})}></div>;
};
