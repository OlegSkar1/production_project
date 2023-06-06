import { memo } from 'react';

import { ProfileHeaderDeprecated } from './ProfileHeaderDeprecated';
import { ProfileHeaderRedesigned } from './ProfileHeaderRedesigned';

import { Profile } from '@/entities/Profile';
import { ToggleFeature } from '@/shared/lib/featureFlags';

export interface ProfileHeaderProps {
  className?: string;
  readonly?: boolean;
  canEditProfile?: boolean;
  isLoading?: boolean;
  data?: Profile;
  onEdit?: () => void;
  onSave?: () => void;
  onCancel?: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = memo((props) => {
  return (
    <ToggleFeature
      name='isAppRedesigned'
      off={<ProfileHeaderDeprecated {...props} />}
      on={<ProfileHeaderRedesigned {...props} />}
    />
  );
});
