import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';

import cls from './SidebarItem.module.scss';

import { SidebarItemsType } from '../../model/types/items';

import { getUserAuthData } from 'entities/User';
import { classNames } from 'shared/lib';
import { AppLink, HStack } from 'shared/ui';

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

  return (
    <AppLink to={item.path} theme='invertedPrimary'>
      <HStack gap='8' className={classNames(cls.item, [], { [cls.collapsed]: collapsed })}>
        <item.Icon className={cls.icon} />
        <span className={cls.link}>{t(item.text)}</span>
      </HStack>
    </AppLink>
  );
});
