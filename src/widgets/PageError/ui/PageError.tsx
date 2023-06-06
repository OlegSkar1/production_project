import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: React.FC<PageErrorProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  const updateHandler = () => {
    location.reload();
  };

  return (
    <VStack max gap='16' justify='center' className={classNames(cls.pageError, [className], {})}>
      <TextDeprecated title={t('error')} align='center' size='size_l' theme='error' />
      <ButtonDeprecated onClick={updateHandler}>{t('update-page')}</ButtonDeprecated>
    </VStack>
  );
};
