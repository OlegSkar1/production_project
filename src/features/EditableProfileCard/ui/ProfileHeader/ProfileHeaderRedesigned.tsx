import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileHeaderProps } from './ProfileHeader';

import { classNames } from '@/shared/lib';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';

import cls from './ProfileHeader.module.scss';

export const ProfileHeaderRedesigned: React.FC<ProfileHeaderProps> = memo((props) => {
  const { className, readonly, canEditProfile, isLoading, data, onEdit, onSave, onCancel } = props;
  const { t } = useTranslation();

  return (
    <HStack
      tagname='header'
      justify={readonly ? 'end' : 'between'}
      className={classNames(cls.profileHeaderRedesigned, [className], { [cls.gap]: readonly })}
    >
      {canEditProfile && (
        <>
          {readonly ? (
            <>
              <Avatar size={128} src={data?.avatar} className={cls.avatar} />
              <Button variant='outlined' onClick={onEdit} data-testid='ProfileHeader.editBtn' className={cls.button}>
                {t('edit')}
              </Button>
            </>
          ) : (
            <>
              <Button
                disabled={isLoading}
                variant='outlinedCancel'
                onClick={onCancel}
                data-testid='ProfileHeader.cancelBtn'
              >
                {t('cancel')}
              </Button>
              <Avatar size={128} src={data?.avatar} />
              <Button disabled={isLoading} variant='outlinedSave' onClick={onSave} data-testid='ProfileHeader.saveBtn'>
                {t('save')}
              </Button>
            </>
          )}
        </>
      )}
    </HStack>
  );
});
