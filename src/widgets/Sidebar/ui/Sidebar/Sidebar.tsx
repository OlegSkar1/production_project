import { memo, useMemo, useState } from 'react';

import { useSelector } from 'react-redux';

import cls from './Sidebar.module.scss';

import { getSidebarItemsList } from '../../model/selectors/getSidebarItemsList';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import { LangSwitcher } from 'features/LangSwitcher';
import { ThemeSwither } from 'features/ThemeSwither';
import { classNames } from 'shared/lib';

import { Button, VStack } from 'shared/ui';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = memo((props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const sidebarItemsList = useSelector(getSidebarItemsList);

  const toggleHandler = () => setCollapsed((prev) => !prev);

  const itemsList = useMemo(
    () => sidebarItemsList.map((item) => <SidebarItem item={item} key={item.path} collapsed={collapsed} />),
    [collapsed, sidebarItemsList]
  );

  return (
    <div data-testid='sidebar' className={classNames(cls.sidebar, [className], { [cls.collapsed]: collapsed })}>
      <VStack align='start' gap='16' className={classNames(cls.items)}>
        {itemsList}
      </VStack>
      {/*TODO VStack add tag nav*/}
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
