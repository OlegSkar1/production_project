import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ArticleListItem.module.scss';

import { Article, ArticleView } from '../../model/types/article';

import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, Icon, Text } from 'shared/ui';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
  const { className, article, view } = props;
  const { t } = useTranslation();

  if (view === ArticleView.LIST) {
    return <div className={classNames(cls.articleListItem, [className, cls[view]], {})}>{article.title}</div>;
  }

  return (
    <div className={classNames(cls.articleListItem, [className, cls[view]], {})}>
      <Card>
        <div className={cls.imgWrapper}>
          <img src={article.img} alt={article.title} className={cls.img} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          <Text text={article.type.join(', ')} className={cls.types} />
          <Text className={cls.views} text={article.views} />
          <Icon Svg={EyeIcon} />
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </div>
  );
};
