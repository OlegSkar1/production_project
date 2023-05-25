import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ToggleFeature } from '@/shared/lib/featureFlags';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';

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
    <ToggleFeature
      name='isAppRedesigned'
      off={
        <ButtonDeprecated variant='clearInverted' onClick={changeLang}>
          {t(short ? 'shortLng' : 'language')}
        </ButtonDeprecated>
      }
      on={
        <Button variant='clearIcon' weight='bold' onClick={changeLang}>
          {t('shortLng')}
        </Button>
      }
    />
  );
});
