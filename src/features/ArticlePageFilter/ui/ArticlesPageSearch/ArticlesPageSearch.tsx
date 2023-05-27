import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { articlesFilterReducer } from '../../model/slice/filterSlice';

import SearchIcon from '@/shared/assets/icons/search.svg';
import { classNames } from '@/shared/lib';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { Input as InputDeprecated } from '@/shared/ui';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Input } from '@/shared/ui/redesigned/Input';

interface ArticlesPageSearchProps {
  className?: string;
  onSearch: (val: string) => void;
  search: string;
}

const reducers: ReducersList = {
  articlesFilter: articlesFilterReducer,
};

export const ArticlesPageSearch: FC<ArticlesPageSearchProps> = (props) => {
  const { className, search, onSearch } = props;

  const { t } = useTranslation();

  const content = (
    <ToggleFeature
      name='isAppRedesigned'
      off={
        <CardDeprecated className={classNames('', [className], {})}>
          <InputDeprecated
            label={t('search')}
            value={search}
            onChange={onSearch}
            variant='outlined'
            data-testid='ArticlesPageSearch'
          />
        </CardDeprecated>
      }
      on={
        <Input
          size='s'
          value={search}
          onChange={onSearch}
          placeholder={t('search')}
          addonLeft={<Icon Svg={SearchIcon} />}
          data-testid='ArticlesPageSearch'
        />
      }
    />
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      {content}
    </DynamicModuleLoader>
  );
};
