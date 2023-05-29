import { FC, HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';

import { Article, ArticleView, TextBlock } from '../../model/types/article';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { HStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation('articles');

  const types = <TextDeprecated text={article.type.join(', ')} className={cls.types} />;
  const views = (
    <HStack gap='4'>
      <TextDeprecated text={String(article.views)} />
      <IconDeprecated Svg={EyeIcon} />
    </HStack>
  );

  if (view === ArticleView.LIST) {
    const block = article.blocks.find((block) => block.type === 'TEXT') as TextBlock;

    return (
      <article className={classNames('', [className, cls[view]], {})} data-testid='ArticleListItem'>
        <CardDeprecated>
          <HStack gap='8'>
            {article.user.avatar && <Avatar src={article.user.avatar} alt={article.title} size={30} />}
            <TextDeprecated text={article.user.username} className={cls.username} />
            <TextDeprecated text={article.createdAt} className={cls.date} />
          </HStack>
          <TextDeprecated title={article.title} className={cls.title} size='size_l' />
          {types}
          <AppImage
            src={article.img}
            alt={article.title}
            className={cls.img}
            fallback={<SkeletonDeprecated height={200} />}
          />
          <ArticleTextBlock block={block} className={cls.content} />
          <HStack justify='between' className={cls.footer}>
            <AppLink to={getRouteArticleDetails(article.id)} theme='outlined'>
              {t('read more')}
            </AppLink>
            {views}
          </HStack>
        </CardDeprecated>
      </article>
    );
  }

  return (
    <div className={classNames('', [className, cls[view]], {})} data-testid='ArticleListItem'>
      <AppLink to={getRouteArticleDetails(article.id)} target={target}>
        <CardDeprecated>
          <div className={cls.imgWrapper}>
            <AppImage
              src={article.img}
              alt={article.title}
              className={cls.img}
              fallback={<SkeletonDeprecated height={200} />}
            />
            <TextDeprecated text={article.createdAt} className={cls.date} />
          </div>
          <HStack gap='4' justify='between' className={cls.infoWrapper}>
            {types}
            {views}
          </HStack>
          <TextDeprecated title={article.title} className={cls.title} size='size_s' />
        </CardDeprecated>
      </AppLink>
    </div>
  );
};
