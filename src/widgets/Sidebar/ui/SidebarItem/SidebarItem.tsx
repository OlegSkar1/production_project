import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';

import cls from './SidebarItem.module.scss';

import { SidebarItemsType } from '../../model/items';

import { routePath } from 'app/providers/router/config/routeConfig';
import { getUserAuthData } from 'entities/User';
import { classNames } from 'shared/lib';
import { AppLink } from 'shared/ui';

interface SidebarItemProps {
  item: SidebarItemsType;
  collapsed: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = memo(({ item, collapsed }) => {
  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);

  if (item.authOnly && !authData) {
    return null;
  }

  if (item.path === routePath.profile && authData) {
    return (
      <div className={classNames(cls.item, [], { [cls.collapsed]: collapsed })}>
        <AppLink to={`${item.path}${authData.id}`} theme='invertedPrimary' className={cls.item}>
          <item.Icon className={cls.icon} />
          <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
      </div>
    );
  }

  return (
    <div className={classNames(cls.item, [], { [cls.collapsed]: collapsed })}>
      <AppLink to={item.path} theme='invertedPrimary' className={cls.item}>
        <item.Icon className={cls.icon} />
        <span className={cls.link}>{t(item.text)}</span>
      </AppLink>
    </div>
  );
});
