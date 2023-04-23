import popupCls from './popup.module.scss';

import { DirectionType } from 'shared/types/ui';

export const mapDirectionClasses: Record<DirectionType, string> = {
  'top left': popupCls.directionTopLeft,
  'top right': popupCls.directionTopRight,
  'bottom left': popupCls.directionBottomLeft,
  'bottom right': popupCls.directionBottomRight,
};
