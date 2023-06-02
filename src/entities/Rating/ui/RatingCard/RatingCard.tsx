import { FC, memo } from 'react';

import { RatingCardDeprecated } from '../RatingCardDeprecated/RatingCardDeprecated';
import { RatingCardRedesigned } from '../RatingCardRedesigned/RatingCardRedesigned';

import { ToggleFeature } from '@/shared/lib/featureFlags';

export interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onAccept?: (starCount: number, feedback?: string) => void;
  onCancel?: (starCount: number) => void;
  rate?: number;
}

export const RatingCard: FC<RatingCardProps> = memo((props) => {
  return (
    <ToggleFeature
      name='isAppRedesigned'
      off={<RatingCardDeprecated {...props} />}
      on={<RatingCardRedesigned {...props} />}
    />
  );
});
