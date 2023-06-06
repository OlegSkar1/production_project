import { memo } from 'react';
import { useSelector } from 'react-redux';

import { getArticleData, getArticleIsLoading } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { VStack, HStack } from '@/shared/ui/redesigned/Stack';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';

interface ArticleAdditionalInfoContainerProps {
  className?: string;
}

export const ArticleAdditionalInfoContainer: React.FC<ArticleAdditionalInfoContainerProps> = memo((props) => {
  const { className } = props;

  const article = useSelector(getArticleData);
  const isLoading = useSelector(getArticleIsLoading);

  if (isLoading) {
    return (
      <Card max>
        <VStack gap='32' align='start' className={className}>
          <HStack max gap='8'>
            <Skeleton variant='circle' width={32} height={32} />
            <Skeleton variant='text' />
          </HStack>
          <Skeleton width='90%' height={38} borderRadius={16} />
          <Skeleton variant='text' width='70%' />
        </VStack>
      </Card>
    );
  }

  if (!article) return null;

  return (
    <Card className={className}>
      <ArticleAdditionalInfo author={article.user} createdAt={article.createdAt} views={article.views} />
    </Card>
  );
});
