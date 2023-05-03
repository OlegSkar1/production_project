import { FC, HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';

import { Article, ArticleView, TextBlock } from '../../model/types/article';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';

import { getRouteArticleDetails } from '@/app/providers/router/config/consts';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage, AppLink, Avatar, Card, HStack, Icon, Skeleton, Text } from '@/shared/ui';

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

  const types = <Text text={article.type.join(', ')} className={cls.types} />;
  const views = (
    <HStack gap='4'>
      <Text text={String(article.views)} />
      <Icon Svg={EyeIcon} />
    </HStack>
  );

  if (view === ArticleView.LIST) {
    const block = article.blocks.find((block) => block.type === 'TEXT') as TextBlock;

    return (
      <article className={classNames('', [className, cls[view]], {})}>
        <Card>
          <HStack gap='8'>
            {article.user.avatar && <Avatar src={article.user.avatar} alt={article.title} size={30} />}
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </HStack>
          <Text title={article.title} className={cls.title} size='size_l' />
          {types}
          <AppImage src={article.img} alt={article.title} className={cls.img} fallback={<Skeleton height={200} />} />
          <ArticleTextBlock block={block} className={cls.content} />
          <HStack justify='between' className={cls.footer}>
            <AppLink to={getRouteArticleDetails(article.id)} theme='outlined'>
              {t('read more')}
            </AppLink>
            {views}
          </HStack>
        </Card>
      </article>
    );
  }

  return (
    <div className={classNames('', [className, cls[view]], {})}>
      <AppLink to={getRouteArticleDetails(article.id)} target={target}>
        <Card>
          <div className={cls.imgWrapper}>
            <AppImage src={article.img} alt={article.title} className={cls.img} fallback={<Skeleton height={200} />} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <HStack gap='4' justify='between' className={cls.infoWrapper}>
            {types}
            {views}
          </HStack>
          <Text title={article.title} className={cls.title} size='size_s' />
        </Card>
      </AppLink>
    </div>
  );
};
