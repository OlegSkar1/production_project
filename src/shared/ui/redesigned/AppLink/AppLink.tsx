import { HTMLAttributeAnchorTarget, memo } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';

import { classNames } from '@/shared/lib';

import cls from './AppLink.module.scss';

type AppLinkVariant = 'primary' | 'outlined' | 'red';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  target?: HTMLAttributeAnchorTarget;
  activeClassName?: string;
}

export const AppLink: React.FC<AppLinkProps> = memo((props) => {
  const { className, children, to, variant = 'primary', activeClassName = '', target, ...otherProps } = props;

  return (
    <NavLink
      to={to}
      target={target}
      className={({ isActive }) => classNames(cls.appLink, [cls[variant], className], { [activeClassName]: isActive })}
      {...otherProps}
    >
      {children}
    </NavLink>
  );
});
