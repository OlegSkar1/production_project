import { FC, memo } from 'react';

import { CodeBlock } from '../../model/types/article';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui';

import cls from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
  className?: string;
  block: CodeBlock;
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = memo((props) => {
  const { className, block } = props;

  return <Code className={classNames(cls.articleCodeBlock, [className], {})} text={block.code} />;
});
