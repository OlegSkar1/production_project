import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Article } from '../../model/types/article';
import { ArticleBlockComponent } from '../ArticleBlockComponent/ArticleBlockComponent';

import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text as Text } from '@/shared/ui/redesigned/Text';

import cls from './ArticleDetailsRedesigned.module.scss';

interface ArticleDetailsProps {
  className?: string;
  loading?: boolean;
  error?: string;
  article?: Article;
}

export const ArticleDetailsRedesigned: FC<ArticleDetailsProps> = memo((props) => {
  const { className, loading, error, article } = props;
  const { t } = useTranslation('articles');

  if (loading) {
    return (
      <VStack align='start' gap='16'>
        <VStack max gap='4' align='start'>
          <Skeleton variant='title' />
          <Skeleton variant='title' width='60%' />
        </VStack>
        <Skeleton variant='text' width='40%' />
        <Skeleton height={420} />
        <Skeleton variant='title' width={200} />
        <VStack gap='4' align='start' max>
          <Skeleton variant='text' />
          <Skeleton variant='text' />
          <Skeleton variant='text' />
        </VStack>
        <Skeleton variant='text' height={150} />
      </VStack>
    );
  }

  if (error) {
    return <Text align='center' title={t('an error occurred while loading the article')} theme='error' />;
  }

  if (!article) return null;

  return (
    <VStack gap='16' tagname='header' align='start' data-testid='ArticleDetails.Info' className={className}>
      <Text tagname='h1' title={article.title} size='size_l' bold />
      <Text tagname='h2' title={article.subtitle} size='size_m' />
      <AppImage fallback={<Skeleton height={420} />} src={article.img} className={cls.img} />
      {article.blocks.map((block) => (
        <ArticleBlockComponent block={block} key={block.id} />
      ))}
    </VStack>
  );
});
