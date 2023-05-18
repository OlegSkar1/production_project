import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { SidebarItemsType } from '../../model/types/items';

import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib';
import { AppLink, HStack } from '@/shared/ui';

import cls from './SidebarItem.module.scss';

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
      <HStack gap='8' className={classNames('', [], { [cls.collapsed]: collapsed })}>
        <item.Icon className={cls.icon} width={24} height={24} />
        <span className={cls.link}>{t(item.text)}</span>
      </HStack>
    </AppLink>
  );
});
