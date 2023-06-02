import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { articleCommentReducer } from '../../model/slice/articleCommentSlice/articleCommentSlice';
import { ArticleAdditionalInfoContainer } from '../ArticleAdditionalInfoContainer/ArticleAdditionalInfoContainer';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsContainer } from '../ArticleDetailsContainer/ArticleDetailsContainer';
import { ArticleDetailsHeader } from '../ArticleDetailsHeader/ArticleDetailsHeader';

import { ArticleDetails, getArticleError } from '@/entities/Article';
import { ArticleRateCard } from '@/features/ArticleRateCard';
import { RecommendArticles } from '@/features/RecommendArticles';
import { StickyContentLayout } from '@/shared/layouts';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Page } from '@/widgets/Page';

import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleComments: articleCommentReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { id = '1' } = useParams<{ id: string }>();
  const { t } = useTranslation('articles');

  const articleError = useSelector(getArticleError);

  if (!id) {
    return <div className={classNames(cls.articleDetailsPage, [className], {})}>{t('Article not found')}</div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ToggleFeature
        name='isAppRedesigned'
        off={
          <Page data-testid='ArticleDetailsPage' className={classNames(cls.articleDetailsPage, [className], {})}>
            <ArticleDetailsHeader />
            <ArticleDetails id={id} />
            {!articleError && (
              <>
                <CardDeprecated>
                  <TextDeprecated text={t('Here will be the evaluation of the article')} />
                </CardDeprecated>
                <ArticleRateCard articleId={id} />
                <RecommendArticles />
                <ArticleDetailsComments />
              </>
            )}
          </Page>
        }
        on={
          <StickyContentLayout
            content={
              <Page
                data-testid='ArticleDetailsPage'
                className={classNames(cls.articleDetailsPageRedesigned, [className], {})}
              >
                <ArticleDetailsContainer />
                {!articleError && (
                  <>
                    <ArticleRateCard articleId={id} />
                    <RecommendArticles />
                    <ArticleDetailsComments />
                  </>
                )}
              </Page>
            }
            right={<ArticleAdditionalInfoContainer />}
          />
        }
      />
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
