import { FC, memo, useCallback } from 'react';

import CopyIcon from '../../../assets/icons/copyIcon.svg';
import { Button as ButtonDeprecated } from '../../deprecated/Button';
import { Icon } from '../Icon';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/featureFlags';

import cls from './Code.module.scss';

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
    <ToggleFeature
      name='isAppRedesigned'
      off={
        <div className={classNames(cls.codeWrapper, [className], {})}>
          <pre className={cls.code}>
            <ButtonDeprecated variant='clear' className={cls.codeBtn} onClick={onCopy}>
              <CopyIcon className={cls.btnIcon} />
            </ButtonDeprecated>
            <code>{text}</code>
          </pre>
        </div>
      }
      on={
        <pre className={classNames(cls.codeRedesigned, [className], {})}>
          <Icon Svg={CopyIcon} clickable onClick={onCopy} className={cls.codeBtn} />
          <code>{text}</code>
        </pre>
      }
    />
  );
});
