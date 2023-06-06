import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';

interface ArticleDetailsContainerProps {
  className?: string;
}

export const ArticleDetailsContainer: FC<ArticleDetailsContainerProps> = memo((props) => {
  const { className } = props;
  const { id = '1' } = useParams<{ id: string }>();

  return (
    <Card tagname='article' className={className}>
      <ArticleDetails id={id} />
    </Card>
  );
});
