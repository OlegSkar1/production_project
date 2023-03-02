import { memo, useMemo, useState } from 'react';

import cls from './Sidebar.module.scss';

import { SidebarItem } from '../SidebarItem/SidebarItem';

import { LangSwitcher } from 'features/LangSwitcher';
import { ThemeSwither } from 'features/ThemeSwither';
import { classNames } from 'shared/lib';

import { Button } from 'shared/ui';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = memo((props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const toggleHandler = () => setCollapsed((prev) => !prev);

  return (
    <div data-testid='sidebar' className={classNames(cls.sidebar, [className], { [cls.collapsed]: collapsed })}>
      <div className={classNames(cls.items)}>
        {SidebarItemsList.map((item) => (
          <SidebarItem item={item} key={item.path} collapsed={collapsed} />
        ))}
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
});
