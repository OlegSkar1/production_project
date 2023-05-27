import { Profile } from '../../model/types/profile';
import { ProfileCardDeprecated } from '../ProfileCardDeprecated/ProfileCardDeprecated';
import { ProfileCardRedesigned } from '../ProfileCardRedesigned/ProfileCardRedesigned';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ToggleFeature } from '@/shared/lib/featureFlags';

export interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirst?: (val: string) => void;
  onChangeLastName?: (val: string) => void;
  onChangeAge?: (val: string) => void;
  onChangeCity?: (val: string) => void;
  onChangeUsername?: (val: string) => void;
  onChangeAvatarLink?: (val: string) => void;
  onChangeCurrency?: (val: Currency) => void;
  onChangeCountry?: (val: Country) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
  return (
    <ToggleFeature
      name='isAppRedesigned'
      off={<ProfileCardDeprecated {...props} />}
      on={<ProfileCardRedesigned {...props} />}
    />
  );
};
