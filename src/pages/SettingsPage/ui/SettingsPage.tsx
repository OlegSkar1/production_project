import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { UiSwitcher } from '@/features/UiSwitcher';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';

interface SettingsPageProps {
  className?: string;
}

const SettingsPage: FC<SettingsPageProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation();

  const Text = (
    <ToggleFeature
      name='isAppRedesigned'
      off={<TextDeprecated title={t('userSettings')} />}
      on={<TextRedesigned title={t('userSettings')} />}
    />
  );

  return (
    <Page className={className}>
      <VStack align='start' gap='16'>
        {Text}
        <UiSwitcher />
      </VStack>
    </Page>
  );
});

export default SettingsPage;
