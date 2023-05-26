import { FC, memo } from 'react';

import { ArticlesPageSearch, ArticlesPageSort, ArticlesPageTabs } from '@/features/ArticlePageFilter';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ArticlesFiltersWidgetProps {
  className?: string;
  onChangeSort: (replace: boolean) => void;
}

export const ArticlesFiltersWidget: FC<ArticlesFiltersWidgetProps> = memo((props) => {
  const { className, onChangeSort } = props;

  return (
    <Card className={className}>
      <VStack gap='16'>
        <ArticlesPageSearch onChangeSort={onChangeSort} />
        <ArticlesPageTabs onTabClick={onChangeSort} />
        <ArticlesPageSort onChangeSort={onChangeSort} />
      </VStack>
    </Card>
  );
});
