import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { SidebarItemsType } from '../../model/types/items';

import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { AppLink, HStack, Icon } from '@/shared/ui';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';

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
    <ToggleFeature
      name='isAppRedesigned'
      off={
        <AppLinkDeprecated to={item.path} theme='invertedPrimary'>
          <HStack gap='8' className={classNames('', [], { [cls.collapsed]: collapsed })}>
            <item.Icon className={cls.icon} width={24} height={24} />
            <span className={cls.link}>{t(item.text)}</span>
          </HStack>
        </AppLinkDeprecated>
      }
      on={
        <AppLink
          to={item.path}
          className={classNames(cls.itemRedesigned, [], { [cls.collapsed]: collapsed })}
          activeClassName={cls.sidebarItemActive}
        >
          <Icon Svg={item.Icon} />
          <span className={cls.linkRedesigned}>{t(item.text)}</span>
        </AppLink>
      }
    />
  );
});
