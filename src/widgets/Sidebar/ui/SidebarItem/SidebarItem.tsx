import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import cls from './SidebarItem.module.scss';

import { SidebarItemsType } from '../../model/items';

import { classNames } from 'shared/lib';
import { AppLink } from 'shared/ui';

interface SidebarItemProps {
  item: SidebarItemsType;
  collapsed: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = memo(({ item, collapsed }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.item, [], { [cls.collapsed]: collapsed })}>
      <AppLink to={item.path} theme='invertedSecondary' className={cls.item}>
        <item.Icon className={cls.icon} />
        <span className={cls.link}>{t(item.text)}</span>
      </AppLink>
    </div>
  );
});
