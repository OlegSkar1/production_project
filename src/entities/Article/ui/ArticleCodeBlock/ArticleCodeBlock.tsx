import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ArticleCodeBlock.module.scss';

import { CodeBlock } from '../../model/types/article';

import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleCodeBlockProps {
  className?: string;
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation();

  // eslint-disable-next-line i18next/no-literal-string
  return <div className={classNames(cls.articleCodeBlock, [className], {})}>ArticleCodeBlock</div>;
});
