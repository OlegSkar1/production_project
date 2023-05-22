import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { canEdit } from '../../model/selectors/canEdit/canEdit';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileCardActions } from '../../model/slice/profileCardSlice';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { HStack, Text } from '@/shared/ui';
import { Button } from '@/shared/ui/deprecated/Button';

interface ProfileHeaderProps {
  className?: string;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation();

  const canEditProfile = useSelector(canEdit);

  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileCardActions.setReadonly(false));
  }, [dispatch]);

  const onCancel = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(profileCardActions.setCancel());
    }
    dispatch(profileCardActions.setReadonly(true));
  }, [dispatch]);

  const onSave = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(updateProfileData());
    }
  }, [dispatch]);

  return (
    <HStack tagname='header' justify='between' className={className}>
      <Text title={t('profile')} />
      {canEditProfile && (
        <div className='btnWrapper'>
          {readonly ? (
            <Button variant='outlined' onClick={onEdit} data-testid='ProfileHeader.editBtn'>
              {t('edit')}
            </Button>
          ) : (
            <HStack gap='16'>
              <Button variant='outlined' onClick={onSave} data-testid='ProfileHeader.saveBtn'>
                {t('save')}
              </Button>
              <Button variant='ontlinedRed' onClick={onCancel} data-testid='ProfileHeader.cancelBtn'>
                {t('cancel')}
              </Button>
            </HStack>
          )}
        </div>
      )}
    </HStack>
  );
});
