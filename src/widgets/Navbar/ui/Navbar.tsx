import { useTranslation } from 'react-i18next';

import cls from './Navbar.module.scss';

import { classNames } from 'shared/lib';
import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink to='/' theme={AppLinkTheme.SECONDARY}>
          {t('main-link')}
        </AppLink>
        <AppLink to='/about' theme={AppLinkTheme.SECONDARY}>
          {t('about-link')}
        </AppLink>
      </div>
    </div>
  );
};
