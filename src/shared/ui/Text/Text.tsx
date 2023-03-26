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
    <>
      {title && <p className={classNames(cls.title, [className, cls[theme], cls[align], cls[size]], {})}>{title}</p>}
      {text && <p className={classNames(cls.paragraph, [className, cls[theme], cls[align], cls[size]], {})}>{text}</p>}
    </>
  );
});
