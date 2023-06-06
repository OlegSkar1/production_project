import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleView, TextBlock } from '../../../model/types/article';
import { ArticleListItemProps } from '../ArticleListItem';
import cls from '../ArticleListItem.module.scss';

import EyeIcon from '@/shared/assets/icons/eye.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Icon as IconRedesigned } from '@/shared/ui/redesigned/Icon';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text, Text as TextRedesigned } from '@/shared/ui/redesigned/Text';

export const ArticleListItemRedesigned: FC<ArticleListItemProps> = (props) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation('articles');

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find((block) => block.type === 'TEXT') as TextBlock | undefined;
    const twoParagraph = textBlock?.paragraph.slice(0, 2).join(' ');

    return (
      <CardRedesigned
        tagname='article'
        className={classNames('', [className, cls[view]], {})}
        data-testid='ArticleListItem'
      >
        <VStack gap='16' align='start'>
          <VStack gap='8' align='start'>
            <HStack gap='8'>
              {article.user.avatar && <Avatar src={article.user.avatar} alt={article.title} size={32} />}
              <TextRedesigned bold text={article.user.username} />
              <TextRedesigned text={article.createdAt} />
            </HStack>
            <TextRedesigned title={article.title} size='size_l' />
          </VStack>
          <TextRedesigned title={article.subtitle} />
          <AppImage
            src={article.img}
            alt={article.title}
            className={cls.imgRedesigned}
            fallback={<SkeletonRedesigned height={250} />}
          />
          <Text text={twoParagraph} className={cls.paragraph} />
          <HStack justify='between' max>
            <AppLink to={getRouteArticleDetails(article.id)}>
              <Button variant='outlined'>{t('read more')}</Button>
            </AppLink>
            <HStack gap='8'>
              <IconRedesigned Svg={EyeIcon} />
              <TextRedesigned text={String(article.views)} />
            </HStack>
          </HStack>
        </VStack>
      </CardRedesigned>
    );
  }

  return (
    <CardRedesigned
      padding='0'
      className={classNames(cls.cardRedesigned, [className, cls[view]], {})}
      data-testid='ArticleListItem'
    >
      <AppLink to={getRouteArticleDetails(article.id)} target={target}>
        <AppImage
          src={article.img}
          alt={article.title}
          className={cls.imgRedesigned}
          fallback={<SkeletonRedesigned height={141} />}
        />
        <VStack gap='8' align='start' className={cls.infoWrapperRedesigned}>
          <TextRedesigned title={article.title} className={cls.titleRedesigned} size='size_s' />
          <VStack gap='8' max className={cls.footerRedesigned}>
            <HStack gap='4' justify='between' max>
              <TextRedesigned text={article.createdAt} />
              <HStack gap='4'>
                <IconRedesigned Svg={EyeIcon} />
                <TextRedesigned text={String(article.views)} />
              </HStack>
            </HStack>
            <HStack gap='4' max>
              <Avatar size={32} src={article.user.avatar} />
              <Text text={article.user.username} bold />
            </HStack>
          </VStack>
        </VStack>
      </AppLink>
    </CardRedesigned>
  );
};
