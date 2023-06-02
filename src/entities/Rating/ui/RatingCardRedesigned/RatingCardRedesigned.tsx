import { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { RatingCardProps } from '../RatingCard/RatingCard';

import { classNames } from '@/shared/lib';
import { useMobile } from '@/shared/lib/hooks/useMobile';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Input } from '@/shared/ui/redesigned/Input';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { getHStack, HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { StarRating } from '@/shared/ui/redesigned/StarRating';
import { Text } from '@/shared/ui/redesigned/Text';

export const RatingCardRedesigned: FC<RatingCardProps> = memo((props) => {
  const { className, title, feedbackTitle, hasFeedback, onAccept, onCancel, rate = 0, ...otherProps } = props;
  const { t } = useTranslation();

  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMobile();

  const onSelectHandler = useCallback(
    (selectedStarCount: number) => {
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarCount);
      }
      setStarsCount(selectedStarCount);
    },
    [hasFeedback, onAccept]
  );

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const modalContent = (
    <>
      <Text title={feedbackTitle} tagname='h3' />
      <Input value={feedback} onChange={setFeedback} placeholder={t('your_feedback')} data-testid='RatingCard.Input' />
    </>
  );

  return (
    <Card className={classNames('', [className], {})} {...otherProps}>
      <VStack gap={'8'} max>
        <Text title={starsCount ? t('thanks_for_rating') : title} tagname='h3' />
        <StarRating size={40} onSelect={onSelectHandler} selectedStars={rate} className={getHStack({ gap: '8' })} />
      </VStack>
      {!isMobile && (
        <Modal isOpen={isModalOpen} onClose={cancelHandler} lazy>
          <VStack max gap='32'>
            {modalContent}
            <HStack max gap='16' justify='end'>
              <Button variant='outlinedCancel' onClick={cancelHandler} data-testid='RatingCard.Cancel'>
                {t('cancel')}
              </Button>
              <Button variant='outlinedSave' onClick={acceptHandler} data-testid='RatingCard.Accept'>
                {t('Send')}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      )}
      {isMobile && (
        <Drawer isOpen={isModalOpen} onClose={cancelHandler}>
          <VStack max gap='16'>
            {modalContent}
            <Button size='l' variant='outlinedSave' fullWidth onClick={acceptHandler}>
              {t('Send')}
            </Button>
          </VStack>
        </Drawer>
      )}
    </Card>
  );
});
