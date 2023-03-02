import { memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import cls from './AppLink.module.scss';

import { classNames } from 'shared/lib';

type AppLinkTheme = 'primary' | 'secondary' | 'invertedPrimary' | 'invertedSecondary';

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = memo((props) => {
  const { className, children, to, theme = 'primary', ...otherProps } = props;

  return (
    <Link to={to} className={classNames(cls.appLink, [className, cls[theme]], {})} {...otherProps}>
      {children}
    </Link>
  );
});
