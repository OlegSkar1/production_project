import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleView, TextBlock } from '../../../model/types/article';
import { ArticleTextBlock } from '../../ArticleTextBlock/ArticleTextBlock';
import { ArticleListItemProps } from '../ArticleListItem';
import cls from '../ArticleListItem.module.scss';

import EyeIcon from '@/shared/assets/icons/eye.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Icon as IconRedesigned } from '@/shared/ui/redesigned/Icon';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';

export const ArticleListItemRedesigned: FC<ArticleListItemProps> = (props) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation('articles');

  const types = <TextRedesigned text={article.type.join(', ')} className={cls.types} />;
  const views = (
    <HStack gap='4'>
      <TextRedesigned text={String(article.views)} />
      <IconRedesigned Svg={EyeIcon} />
    </HStack>
  );

  if (view === ArticleView.LIST) {
    const Textblock = article.blocks.find((block) => block.type === 'TEXT') as TextBlock;

    return (
      <article className={classNames('', [className, cls[view]], {})} data-testid='ArticleListItem'>
        <CardRedesigned>
          <HStack gap='8'>
            {article.user.avatar && <Avatar src={article.user.avatar} alt={article.title} size={30} />}
            <TextRedesigned text={article.user.username} className={cls.username} />
            <TextRedesigned text={article.createdAt} className={cls.date} />
          </HStack>
          <TextRedesigned title={article.title} className={cls.title} size='size_l' />
          {types}
          <AppImage
            src={article.img}
            alt={article.title}
            className={cls.img}
            fallback={<SkeletonRedesigned height={200} />}
          />
          <ArticleTextBlock block={Textblock} className={cls.content} />
          <HStack justify='between' className={cls.footer}>
            <AppLink to={getRouteArticleDetails(article.id)} variant='outlined'>
              {t('read more')}
            </AppLink>
            {views}
          </HStack>
        </CardRedesigned>
      </article>
    );
  }

  return (
    <div className={classNames('', [className, cls[view]], {})} data-testid='ArticleListItem'>
      <AppLink to={getRouteArticleDetails(article.id)} target={target}>
        <CardRedesigned>
          <div className={cls.imgWrapper}>
            <AppImage
              src={article.img}
              alt={article.title}
              className={cls.img}
              fallback={<SkeletonRedesigned height={200} />}
            />
            <TextRedesigned text={article.createdAt} className={cls.date} />
          </div>
          <HStack gap='4' justify='between' className={cls.infoWrapper}>
            {types}
            {views}
          </HStack>
          <TextRedesigned title={article.title} className={cls.title} size='size_s' />
        </CardRedesigned>
      </AppLink>
    </div>
  );
};
