import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getArticleData } from '../../model/selectors/getArticleData/getArticleData';
import { getArticleError } from '../../model/selectors/getArticleError/getArticleError';
import { getArticleIsLoading } from '../../model/selectors/getArticleIsLoading/getArticleIsLoading';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { articleReducer } from '../../model/slice/articleSlice';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';

import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitEffect } from '@/shared/lib/hooks/useInitEffect';
import { Skeleton } from '@/shared/ui';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const initialReducers: ReducersList = {
  article: articleReducer,
};

const articleBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case 'CODE':
      return <ArticleCodeBlock block={block} key={block.id} className={cls.code} />;
    case 'IMAGE':
      return <ArticleImageBlock block={block} key={block.id} />;
    case 'TEXT':
      return <ArticleTextBlock block={block} key={block.id} />;
    default:
      return null;
  }
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
  const { className, id } = props;
  const dispatch = useAppDispatch();

  const loading = useSelector(getArticleIsLoading);
  const error = useSelector(getArticleError);
  const article = useSelector(getArticleData);

  const { t } = useTranslation('articles');

  useInitEffect(() => {
    dispatch(fetchArticleById(id));
  });

  let content;

  if (loading) {
    content = (
      <VStack align='start' gap='16'>
        <Skeleton variant='circle' className={cls.skeletonCircle} width={200} height={200} />
        <Skeleton variant='title' height={32} />
        <Skeleton variant='text' height={24} />
        <Skeleton variant='text' width={55} />
        <Skeleton variant='text' width={105} />
        <Skeleton variant='text' />
        <Skeleton variant='text' />
        <Skeleton variant='text' height={50} />
        <Skeleton variant='text' height={150} />
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
          {article.blocks.map(articleBlock)}
        </VStack>
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <article className={classNames('', [className], {})}>{content}</article>
    </DynamicModuleLoader>
  );
});
