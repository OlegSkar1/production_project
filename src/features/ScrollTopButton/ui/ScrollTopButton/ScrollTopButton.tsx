import { FC, memo } from 'react';

import ScrollBtnIcon from '@/shared/assets/icons/circle-up.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ScrollTopButtonProps {
  className?: string;
}

export const ScrollTopButton: FC<ScrollTopButtonProps> = memo((props) => {
  const { className } = props;

  const clickHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return <Icon Svg={ScrollBtnIcon} clickable onClick={clickHandler} className={className} />;
});
