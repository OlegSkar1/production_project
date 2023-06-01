import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { getFeatureFlags, ToggleFeature, updateFeatureFlags } from '@/shared/lib/featureFlags';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ListBoxItem } from '@/shared/ui';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups/ListBox';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ListBox as ListBoxRedesigned } from '@/shared/ui/redesigned/Popups';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface UiSwitcherProps {
  className?: string;
}

export const UiSwitcher: FC<UiSwitcherProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isAppRedesigned = getFeatureFlags('isAppRedesigned');
  const authData = useSelector(getUserAuthData);
  const [isLoading, setIsLoading] = useState(false);

  const items: ListBoxItem[] = [
    {
      content: t('oldDesign'),
      value: 'old',
    },
    {
      content: t('newDesign'),
      value: 'new',
    },
  ];

  const onChange = async (value: string) => {
    setIsLoading(true);
    if (authData) {
      await dispatch(
        updateFeatureFlags({
          newFeatures: {
            isAppRedesigned: value === 'new',
          },
          userId: authData?.id,
        })
      ).unwrap();
      setIsLoading(false);
    }
  };

  return (
    <ToggleFeature
      name='isAppRedesigned'
      off={
        <HStack gap='8'>
          <TextDeprecated text={t('interfaceVariant')} />
          {isLoading ? (
            <SkeletonDeprecated width={143} height={36} />
          ) : (
            <ListBoxDeprecated
              value={isAppRedesigned ? 'new' : 'old'}
              onChange={onChange}
              items={items}
              className={className}
            />
          )}
        </HStack>
      }
      on={
        <HStack gap='8'>
          <Text text={t('interfaceVariant')} />
          {isLoading ? (
            <Skeleton width={174} height={38} borderRadius={34} />
          ) : (
            <ListBoxRedesigned
              value={isAppRedesigned ? 'new' : 'old'}
              onChange={onChange}
              items={items}
              className={className}
            />
          )}
        </HStack>
      }
    />
  );
});
