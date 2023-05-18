import { memo } from 'react';

import { classNames } from '@/shared/lib';

import cls from './Text.module.scss';

type TextTheme = 'primary' | 'error';
type TextAlign = 'left' | 'right' | 'center';
type Size = 'size_s' | 'size_m' | 'size_l';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: Size;
  tagname?: 'h1' | 'h2' | 'h3';
  'data-testid'?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Text: React.FC<TextProps> = memo((props) => {
  const {
    className,
    title,
    text,
    theme = 'primary',
    align = 'left',
    size = 'size_m',
    tagname: Tag = 'h1',
    'data-testid': dataTestId = 'Text',
  } = props;

  return (
    <>
      {title && (
        <Tag
          className={classNames(cls.title, [className, cls[theme], cls[align], cls[size]], {})}
          data-testid={`${dataTestId}.Header`}
        >
          {title}
        </Tag>
      )}
      {text && (
        <p
          className={classNames(cls.paragraph, [className, cls[theme], cls[align], cls[size]], {})}
          data-testid={`${dataTestId}.Paragraph`}
        >
          {text}
        </p>
      )}
    </>
  );
});
