import { FC, memo, useCallback } from 'react';

import cls from './Code.module.scss';

import CopyIcon from '../../assets/icons/copy-20-20.svg';
import { Button } from '../Button/Button';

import { classNames } from 'shared/lib/classNames/classNames';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code: FC<CodeProps> = memo((props) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <div className={cls.codeWrapper}>
      <pre className={classNames(cls.code, [className], {})}>
        <Button variant='clear' className={cls.codeBtn} onClick={onCopy}>
          <CopyIcon className={cls.btnIcon} />
        </Button>
        <code>{text}</code>
      </pre>
    </div>
  );
});
