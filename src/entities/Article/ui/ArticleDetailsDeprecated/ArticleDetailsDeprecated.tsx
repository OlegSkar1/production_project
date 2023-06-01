import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Article } from '../../model/types/article';
import { ArticleBlockComponent } from '../ArticleBlockComponent/ArticleBlockComponent';
import cls from '../ArticleDetails/ArticleDetails.module.scss';

import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

interface ArticleDetailsProps {
  className?: string;
  loading?: boolean;
  error?: string;
  article?: Article;
}

export const ArticleDetailsDeprecated: FC<ArticleDetailsProps> = memo((props) => {
  const { className, loading, error, article } = props;
  const { t } = useTranslation('articles');

  let content;

  if (loading) {
    content = (
      <VStack align='start' gap='16'>
        <SkeletonDeprecated variant='circle' className={cls.skeletonCircle} width={200} height={200} />
        <SkeletonDeprecated variant='title' height={32} />
        <SkeletonDeprecated variant='text' height={24} />
        <SkeletonDeprecated variant='text' width={55} />
        <SkeletonDeprecated variant='text' width={105} />
        <SkeletonDeprecated variant='text' />
        <SkeletonDeprecated variant='text' />
        <SkeletonDeprecated variant='text' height={50} />
        <SkeletonDeprecated variant='text' height={150} />
      </VStack>
    );
  } else if (error) {
    content = <TextDeprecated align='center' title={t('an error occurred while loading the article')} theme='error' />;
  } else if (article) {
    content = (
      <>
        <HStack max justify='center' className={cls.avatarWrapper}>
          <Avatar size={200} src={article.img} alt={article.title} />
        </HStack>
        <VStack tagname='header' align='start' data-testid='ArticleDetails.Info'>
          <TextDeprecated tagname='h1' title={article.title} size='size_l' />
          <TextDeprecated tagname='h2' title={article.subtitle} size='size_m' className={cls.articleSubTitle} />
          <HStack gap='4'>
            <IconDeprecated Svg={EyeIcon} />
            <TextDeprecated text={String(article.views)} />
          </HStack>
          <HStack gap='4' className={cls.calendarWrapper}>
            <IconDeprecated Svg={CalendarIcon} />
            <TextDeprecated text={article.createdAt} />
          </HStack>
        </VStack>
        <VStack gap='32' align='start'>
          {article.blocks.map((block) => (
            <ArticleBlockComponent block={block} key={block.id} />
          ))}
        </VStack>
      </>
    );
  }

  return <article className={className}>{content}</article>;
});
