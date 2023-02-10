import { useTranslation } from 'react-i18next';

import cls from './LangSwitcher.module.scss';

import { classNames } from 'shared/lib';
import { Button, ButtonTheme } from 'shared/ui';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = (props) => {
  const { className } = props;

  const { t, i18n } = useTranslation();

  const changeLang = async () => {
    i18n.changeLanguage(i18n.language.includes('ru') ? 'en' : 'ru');
  };
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.langSwitcher, {}, [className])}
      onClick={changeLang}
    >
      {t('language')}
    </Button>
  );
};
