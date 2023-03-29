import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ArticleListItem.module.scss';

import { Article, ArticleView, TextBlock } from '../../model/types/article';

import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';

import { routePath } from 'app/providers/router/config/routeConfig';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, Avatar, Card, Icon, Text } from 'shared/ui';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
  const { className, article, view } = props;
  const { t } = useTranslation('articles');

  const types = <Text text={article.type.join(', ')} className={cls.types} />;
  const views = (
    <div className={cls.viewsWrapper}>
      <Text text={String(article.views)} />
      <Icon Svg={EyeIcon} />
    </div>
  );

  if (view === ArticleView.LIST) {
    const block = article.blocks.find((block) => block.type === 'TEXT') as TextBlock;

    return (
      <article className={classNames(cls.articleListItem, [className, cls[view]], {})}>
        <Card>
          <header className={cls.headerWrapper}>
            {article.user.avatar && <Avatar src={article.user.avatar} alt={article.title} size={30} />}
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </header>
          <Text title={article.title} className={cls.title} />
          {types}
          <img src={article.img} alt={article.title} className={cls.img} />
          <ArticleTextBlock block={block} className={cls.content} />
          <div className={cls.footer}>
            <AppLink to={`${routePath.articles_details}${article.id}`} className={cls.link} theme='outlined'>
              {t('read more')}
            </AppLink>
            {views}
          </div>
        </Card>
      </article>
    );
  }

  return (
    <div className={classNames('', [className, cls[view]], {})}>
      <AppLink to={`${routePath.articles_details}${article.id}`}>
        <Card>
          <div className={cls.imgWrapper}>
            <img src={article.img} alt={article.title} className={cls.img} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <div className={cls.infoWrapper}>
            {types}
            {views}
          </div>
          <Text text={article.title} className={cls.title} />
        </Card>
      </AppLink>
    </div>
  );
};
