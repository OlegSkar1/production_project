import { useState } from 'react';
import { classNames } from 'shared/lib';
import { ThemeSwither } from 'features/ThemeSwither';
import { LangSwitcher } from 'features/LangSwitcher';
import cls from './Sidebar.module.scss';
import { Button } from 'shared/ui';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const toggleHandler = () => setCollapsed((prev) => !prev);

  return (
    <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button className={cls.toggleButton} onClick={toggleHandler}>
        Toggle
      </Button>

      <div className={cls.switchers}>
        <ThemeSwither />
        <LangSwitcher />
      </div>
    </div>
  );
};
