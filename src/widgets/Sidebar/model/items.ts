import { routePath } from 'app/providers/router/config/routeConfig';
import AboutIcon from 'shared/assets/icons/about_us.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemsType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemsType[] = [
  {
    path: routePath.main,
    text: 'main-link',
    Icon: HomeIcon,
  },
  {
    path: routePath.about,
    text: 'about-link',
    Icon: AboutIcon,
  },
  {
    path: routePath.profile,
    text: 'profile-link',
    Icon: ProfileIcon,
    authOnly: true,
  },
];
