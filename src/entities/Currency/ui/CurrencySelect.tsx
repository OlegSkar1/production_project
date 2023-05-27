import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Currency } from '../model/types/currency';

import { classNames } from '@/shared/lib';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { DirectionType } from '@/shared/types/ui';
import { ListBoxItem } from '@/shared/ui';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups/ListBox';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
  direction?: DirectionType;
}

const options: ListBoxItem[] = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect: React.FC<CurrencySelectProps> = memo((props) => {
  const { className, value, onChange, readonly, direction = 'top right' } = props;

  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  return (
    <ToggleFeature
      name='isAppRedesigned'
      off={
        <ListBoxDeprecated
          items={options}
          onChange={onChangeHandler}
          label={t('currency_label')}
          value={value}
          readonly={readonly}
          className={classNames('', [className], {})}
          direction={direction}
        />
      }
      on={
        <ListBox
          size='s'
          items={options}
          onChange={onChangeHandler}
          label={t('currency_label')}
          value={value}
          readonly={readonly}
          className={classNames('', [className], {})}
          direction={direction}
          labelDirection='row'
        />
      }
    />
  );
});
