import { memo } from 'react';

import cls from './Text.module.scss';

import { classNames } from 'shared/lib';

type TextTheme = 'primary' | 'error';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text: React.FC<TextProps> = memo((props) => {
  const { className, title, text, theme = 'primary' } = props;

  return (
    <div className={classNames(cls.text, [className, cls[theme]], {})}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.paragraph}>{text}</p>}
    </div>
  );
});
