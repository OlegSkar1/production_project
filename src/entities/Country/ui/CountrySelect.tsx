import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Country } from '../model/types/county';

import { classNames } from 'shared/lib';
import { ListBox, ListBoxItem } from 'shared/ui';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

export const CountrySelect: React.FC<CountrySelectProps> = memo((props) => {
  const { className, value, onChange, readonly } = props;

  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  const options: ListBoxItem[] = useMemo(
    () => [
      { value: Country.Russia, content: t('russia') },
      { value: Country.Ukraine, content: t('ukraine') },
      { value: Country.Belarus, content: t('belarus') },
      { value: Country.Kazakhstan, content: t('kazakhstan') },
      { value: Country.Armenia, content: t('armenia') },
    ],
    [t]
  );

  return (
    <ListBox
      items={options}
      onChange={onChangeHandler}
      value={value}
      readonly={readonly}
      className={classNames('', [className], {})}
      label={t('Country_label')}
      direction='top right'
    />
  );
});
