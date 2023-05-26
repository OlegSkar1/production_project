import { FC, memo } from 'react';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

import { ArticlesPageSearch, ArticlesPageSort, ArticlesPageTabs } from '@/features/ArticlePageFilter';
import { ArticleViewChanger } from '@/features/ArticleViewChanger';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticlesFilters.module.scss';

interface ArticlesFiltersProps {
  className?: string;
}

export const ArticlesFilters: FC<ArticlesFiltersProps> = memo((props) => {
  const { className } = props;
  const { view, onChangeSort, onChangeView } = useArticleFilters();

  return (
    <div className={classNames('', [className], {})}>
      <HStack justify='between' className={cls.articlesHeaderWrapper}>
        <ArticlesPageSort onChangeSort={onChangeSort} />
        <ArticleViewChanger onViewClick={onChangeView} view={view} />
      </HStack>
      <ArticlesPageSearch onChangeSort={onChangeSort} className={cls.search} />
      <ArticlesPageTabs onTabClick={onChangeSort} className={cls.tabs} />
    </div>
  );
});
