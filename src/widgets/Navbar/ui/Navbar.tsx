import { classNames } from 'shared/lib';
import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/NavLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
          Main
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
          About
        </AppLink>
      </div>
    </div>
  );
};
