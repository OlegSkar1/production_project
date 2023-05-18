import { FC, memo, useCallback } from 'react';

import CopyIcon from '../../../assets/icons/copy-20-20.svg';
import { Button } from '../Button/Button';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Code: FC<CodeProps> = memo((props) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <div className={classNames(cls.codeWrapper, [className], {})}>
      <pre className={cls.code}>
        <Button variant='clear' className={cls.codeBtn} onClick={onCopy}>
          <CopyIcon className={cls.btnIcon} />
        </Button>
        <code>{text}</code>
      </pre>
    </div>
  );
});
