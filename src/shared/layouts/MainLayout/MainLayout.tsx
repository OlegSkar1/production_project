import { FC, ReactElement, memo } from 'react';

import { classNames } from '@/shared/lib';

import cls from './MainLayout.module.scss';

interface MainLayoutProps {
  className?: string;
  header: ReactElement;
  sidebar: ReactElement;
  content: ReactElement;
  toolbar?: ReactElement;
}

export const MainLayout: FC<MainLayoutProps> = memo((props) => {
  const { className, header, sidebar, content, toolbar } = props;

  return (
    <div className={classNames(cls.mainLayout, [className], {})}>
      <div className={cls.content}>{content}</div>
      <div className={cls.sidebar}>{sidebar}</div>
      <div className={cls.rightbar}>
        <div className={cls.header}>{header}</div>
        <div className={cls.toolbar}>{toolbar}</div>
      </div>
    </div>
  );
});
