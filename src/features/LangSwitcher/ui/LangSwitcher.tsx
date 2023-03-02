import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = memo((props) => {
  const { short } = props;

  const { t, i18n } = useTranslation();

  const changeLang = async () => {
    i18n.changeLanguage(i18n.language.includes('ru') ? 'en' : 'ru');
  };
  return (
    <Button variant='clear' onClick={changeLang}>
      {t(short ? 'shortLng' : 'language')}
    </Button>
  );
});
