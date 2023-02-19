import { useTranslation } from 'react-i18next';

import cls from './LangSwitcher.module.scss';

import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = (props) => {
  const { className, short } = props;

  const { t, i18n } = useTranslation();

  const changeLang = async () => {
    i18n.changeLanguage(i18n.language.includes('ru') ? 'en' : 'ru');
  };
  return (
    <Button
      variant={'clear'}
      className={classNames(cls.langSwitcher, [className], {})}
      onClick={changeLang}
    >
      {t(short ? 'shortLng' : 'language')}
    </Button>
  );
};
