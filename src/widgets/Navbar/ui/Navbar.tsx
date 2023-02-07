import { classNames } from 'shared/lib';
import { AppLink, ThemeSwither } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/NavLink/AppLink';
import cls from './Navbar.module.scss';
import UserSvg from 'shared/assets/icons/user-32-32.png';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
        <ThemeSwither />
        <img src={UserSvg} style={{ width: '100%', height: '100%' }} />
      </div>
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
