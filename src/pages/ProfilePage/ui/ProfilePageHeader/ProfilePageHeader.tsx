import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import cls from './ProfilePageHeader.module.scss';

import { updateProfileData } from 'features/EditableProfileCard';
import { getProfileReadonly } from 'features/EditableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly';
import { profileCardActions } from 'features/EditableProfileCard/model/slice/profileCardSlice';
import { classNames } from 'shared/lib';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button } from 'shared/ui';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: React.FC<ProfilePageHeaderProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileCardActions.setReadonly(false));
  }, [dispatch]);

  const onCancel = useCallback(() => {
    dispatch(profileCardActions.setCancel());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.profilePageHeader, [className], {})}>
      {readonly ? (
        <Button variant='outlined' onClick={onEdit}>
          {t('edit')}
        </Button>
      ) : (
        <>
          <Button variant='outlined' onClick={onSave}>
            {t('save')}
          </Button>
          <Button variant='ontlinedRed' onClick={onCancel}>
            {t('cancel')}
          </Button>
        </>
      )}
    </div>
  );
};
