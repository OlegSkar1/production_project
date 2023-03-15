import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ArticleCodeBlock.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleCodeBlockProps {
  className?: string;
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation();

  return <div className={classNames(cls.articleCodeBlock, [className], {})}>ArticleCodeBlock</div>;
});
