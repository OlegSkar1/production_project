import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileHeaderProps } from './ProfileHeader';

import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';

export const ProfileHeaderDeprecated: React.FC<ProfileHeaderProps> = memo((props) => {
  const { className, readonly, canEditProfile, onEdit, onSave, onCancel } = props;
  const { t } = useTranslation();

  return (
    <HStack tagname='header' justify='between' className={className}>
      <TextDeprecated title={t('profile')} />
      {canEditProfile && (
        <div className='btnWrapper'>
          {readonly ? (
            <ButtonDeprecated variant='outlined' onClick={onEdit} data-testid='ProfileHeader.editBtn'>
              {t('edit')}
            </ButtonDeprecated>
          ) : (
            <HStack gap='16'>
              <ButtonDeprecated variant='outlined' onClick={onSave} data-testid='ProfileHeader.saveBtn'>
                {t('save')}
              </ButtonDeprecated>
              <ButtonDeprecated variant='ontlinedRed' onClick={onCancel} data-testid='ProfileHeader.cancelBtn'>
                {t('cancel')}
              </ButtonDeprecated>
            </HStack>
          )}
        </div>
      )}
    </HStack>
  );
});
