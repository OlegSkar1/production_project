import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import cls from './ProfileHeader.module.scss';

import { updateProfileData } from '../..';
import { canEdit } from '../../model/selectors/canEdit/canEdit';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileCardActions } from '../../model/slice/profileCardSlice';

import { classNames } from 'shared/lib';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, HStack, Text } from 'shared/ui';

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
    <HStack tagname='header' justify='between' className={classNames(cls.profileHeader, [className], {})}>
      <Text title={t('profile')} />
      {canEditProfile && (
        <div className='btnWrapper'>
          {readonly ? (
            <Button variant='outlined' onClick={onEdit}>
              {t('edit')}
            </Button>
          ) : (
            <HStack gap='16'>
              <Button variant='outlined' onClick={onSave}>
                {t('save')}
              </Button>
              <Button variant='ontlinedRed' onClick={onCancel}>
                {t('cancel')}
              </Button>
            </HStack>
          )}
        </div>
      )}
    </HStack>
  );
});
