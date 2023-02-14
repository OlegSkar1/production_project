import { useState } from 'react';

import cls from './Sidebar.module.scss';

import { LangSwitcher } from 'features/LangSwitcher';
import { ThemeSwither } from 'features/ThemeSwither';
import { classNames } from 'shared/lib';

import { Button } from 'shared/ui';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const toggleHandler = () => setCollapsed((prev) => !prev);

  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Button data-testid='sidebar-toggle' className={cls.toggleButton} onClick={toggleHandler}>
        Toggle
      </Button>
      <div className={cls.switchers}>
        <ThemeSwither />
        <LangSwitcher />
      </div>
    </div>
  );
};
