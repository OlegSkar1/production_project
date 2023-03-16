import { FC, ReactNode } from 'react';

import cls from './Code.module.scss';

import { Button } from '../Button/Button';

import { classNames } from 'shared/lib/classNames/classNames';

interface CodeProps {
  className?: string;
  children: ReactNode;
}

export const Code: FC<CodeProps> = (props) => {
  const { className, children } = props;

  return (
    <pre className={classNames(cls.code, [className], {})}>
      <Button variant='outlined' className={cls.codeBtn}>
        Копировать
      </Button>
      <code>{children}</code>
    </pre>
  );
};
