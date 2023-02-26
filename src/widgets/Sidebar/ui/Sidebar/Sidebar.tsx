import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import cls from './Sidebar.module.scss';

import { routePath } from 'app/providers/router/config/routeConfig';
import { LangSwitcher } from 'features/LangSwitcher';
import { ThemeSwither } from 'features/ThemeSwither';
import AboutIcon from 'shared/assets/icons/about_us.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import { classNames } from 'shared/lib';

import { AppLink, Button } from 'shared/ui';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const toggleHandler = () => setCollapsed((prev) => !prev);

  return (
    <div data-testid='sidebar' className={classNames(cls.sidebar, [className], { [cls.collapsed]: collapsed })}>
      <div className={classNames(cls.items)}>
        <AppLink to={routePath.main} theme='invertedSecondary' className={cls.item}>
          <HomeIcon className={cls.icon} />
          <span className={cls.link}>{t('main-link')}</span>
        </AppLink>
        <AppLink to={routePath.about} theme='invertedSecondary' className={classNames(cls.item)}>
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t('about-link')}</span>
        </AppLink>
      </div>

      <Button
        square
        size='large'
        variant='backgroundInverted'
        data-testid='sidebar-toggle'
        className={cls.toggleButton}
        onClick={toggleHandler}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwither />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};
