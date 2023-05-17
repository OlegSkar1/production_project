import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { saveJsonSettings, useJsonSettingsByKey } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useMobile } from '@/shared/lib/hooks/useMobile';
import { Drawer, Modal, Text } from '@/shared/ui';

export const ArticleGreeting: FC = memo(() => {
  const { t } = useTranslation('articles');
  const articlePageHasBeenOpen = useJsonSettingsByKey('articlePageHasBeenOpen');
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!articlePageHasBeenOpen) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ articlePageHasBeenOpen: true }));
    }
  }, [articlePageHasBeenOpen, dispatch]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const isMobile = useMobile();

  const text = <Text title={t('Welcome to article page')} text={t('articleGreetingMessage')} />;

  if (isMobile) {
    return (
      <Drawer lazy isOpen={isOpen} onClose={onClose}>
        {text}
      </Drawer>
    );
  }

  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      {text}
    </Modal>
  );
});
