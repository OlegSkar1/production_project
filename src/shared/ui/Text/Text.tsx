import { memo } from 'react';

import cls from './Text.module.scss';

import { classNames } from 'shared/lib';

type TextTheme = 'primary' | 'error';
type TextAlign = 'left' | 'right' | 'center';
type Size = 'size_m' | 'size_l';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: Size;
}

export const Text: React.FC<TextProps> = memo((props) => {
  const { className, title, text, theme = 'primary', align = 'left', size = 'size_m' } = props;

  return (
    <div className={classNames('', [className, cls[theme], cls[align], cls[size]], {})}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.paragraph}>{text}</p>}
    </div>
  );
});
