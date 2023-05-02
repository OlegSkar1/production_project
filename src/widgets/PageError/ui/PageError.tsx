import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import { Button, Text, VStack } from '@/shared/ui';

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
      <Text title={t('error')} align='center' size='size_l' theme='error' />
      <Button onClick={updateHandler}>{t('update-page')}</Button>
    </VStack>
  );
};
