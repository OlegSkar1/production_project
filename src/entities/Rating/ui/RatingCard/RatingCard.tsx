import { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import { useMobile } from '@/shared/lib/hooks/useMobile';
import { Card, Drawer, HStack, Input, Modal, StarRating, Text, VStack } from '@/shared/ui';
import { Button } from '@/shared/ui/deprecated/Button';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onAccept?: (starCount: number, feedback?: string) => void;
  onCancel?: (starCount: number) => void;
  rate?: number;
}

export const RatingCard: FC<RatingCardProps> = memo((props) => {
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
        <StarRating size={40} onSelect={onSelectHandler} selectedStars={rate} />
      </VStack>
      {!isMobile && (
        <Modal isOpen={isModalOpen} onClose={cancelHandler} lazy>
          <VStack max gap='32'>
            {modalContent}
            <HStack max gap='16' justify='end'>
              <Button variant='ontlinedRed' onClick={cancelHandler} data-testid='RatingCard.Cancel'>
                {t('cancel')}
              </Button>
              <Button variant='outlined' onClick={acceptHandler} data-testid='RatingCard.Accept'>
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
            <Button size='extraLarge' variant='outlined' fullWidth onClick={acceptHandler}>
              {t('Send')}
            </Button>
          </VStack>
        </Drawer>
      )}
    </Card>
  );
});
