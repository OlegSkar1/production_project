import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './[FTName].module.scss';

import { classNames } from 'shared/lib/classNames/classNames';

interface [FTName]Props {
  className?: string;
}

export const [FTName]: FC<[FTName]Props> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return <div className={classNames(cls.[FTName | camelcase], [className], {})}></div>;
};
