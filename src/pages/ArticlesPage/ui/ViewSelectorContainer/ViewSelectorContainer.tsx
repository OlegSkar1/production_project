import { FC, memo } from 'react';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

import { ArticleViewChanger } from '@/features/ArticleViewChanger';

interface ViewSelectorContainerProps {
  className?: string;
}

export const ViewSelectorContainer: FC<ViewSelectorContainerProps> = memo((props) => {
  const { className } = props;

  const { view, onChangeView } = useArticleFilters();

  return <ArticleViewChanger className={className} onViewClick={onChangeView} view={view} />;
});
