import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Currency } from '../model/types/currency';

import { classNames } from 'shared/lib';
import { Select } from 'shared/ui';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect: React.FC<CurrencySelectProps> = memo((props) => {
  const { className, value, onChange, readonly } = props;

  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  return (
    <Select
      label={t('currency_label')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
      className={classNames('', [className], {})}
    ></Select>
  );
});
