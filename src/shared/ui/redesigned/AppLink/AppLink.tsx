import { HTMLAttributeAnchorTarget, memo } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';

import { classNames } from '@/shared/lib';

import cls from './AppLink.module.scss';

type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  target?: HTMLAttributeAnchorTarget;
}

export const AppLink: React.FC<AppLinkProps> = memo((props) => {
  const { className, children, to, variant = 'primary', target, ...otherProps } = props;

  return (
    <NavLink
      to={to}
      target={target}
      className={({ isActive }) => classNames(cls.appLink, [className, cls[variant]], { [cls.active]: isActive })}
      {...otherProps}
    >
      {children}
    </NavLink>
  );
});
