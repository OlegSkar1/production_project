import { memo } from 'react';

import { classNames } from '@/shared/lib';

import cls from './Text.module.scss';

type TextVariant = 'primary' | 'error';
type TextAlign = 'left' | 'right' | 'center';
type Size = 'size_s' | 'size_m' | 'size_l';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextVariant;
  align?: TextAlign;
  size?: Size;
  tagname?: 'h1' | 'h2' | 'h3';
  'data-testid'?: string;
  bold?: boolean;
}

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
    bold,
  } = props;

  const additional = [className, cls[theme], cls[align], cls[size]];

  return (
    <>
      {title && (
        <Tag
          className={classNames(cls.title, additional, { [cls.boldTitle]: bold })}
          data-testid={`${dataTestId}.Header`}
        >
          {title}
        </Tag>
      )}
      {text && (
        <p
          className={classNames(cls.paragraph, additional, { [cls.boldText]: bold })}
          data-testid={`${dataTestId}.Paragraph`}
        >
          {text}
        </p>
      )}
    </>
  );
});
