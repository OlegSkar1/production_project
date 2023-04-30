import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';

import { useFetchRateProfileQuery, useSendRateProfileMutation } from '../../api/profileRateApi';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton, Text } from '@/shared/ui';

interface ProfileRateCardProps {
  className?: string;
  profileId: string;
}

export const ProfileRateCard: FC<ProfileRateCardProps> = memo((props) => {
  const { className, profileId } = props;
  const { t } = useTranslation('profile');

  const userData = useSelector(getUserAuthData);

  const { data: rateData, isLoading, isError } = useFetchRateProfileQuery({ userId: userData?.id ?? '', profileId });

  const [profileRateMutation] = useSendRateProfileMutation();

  const rating = rateData?.[0];

  const rateDataHandler = useCallback(
    (starCount: number, feedback?: string) => {
      try {
        profileRateMutation({
          profileId,
          userId: userData?.id ?? '',
          rate: starCount,
          feedback,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [profileId, profileRateMutation, userData?.id]
  );

  const acceptHandler = useCallback(
    (starCount: number, feedback?: string) => {
      rateDataHandler(starCount, feedback);
    },
    [rateDataHandler]
  );

  const cancelHandler = useCallback(
    (starCount: number) => {
      rateDataHandler(starCount);
    },
    [rateDataHandler]
  );

  if (isLoading) {
    return <Skeleton height={120} width={'100%'} />;
  }

  if (isError) {
    return <Text text={t('rate_load_error')} theme='error' />;
  }

  if (profileId === userData?.id) {
    return null;
  }

  return (
    <RatingCard
      className={className}
      title={t('rate_the_profile')}
      rate={rating?.rate}
      feedbackTitle={t('input_rate_profile')}
      hasFeedback
      onAccept={acceptHandler}
      onCancel={cancelHandler}
    />
  );
});
