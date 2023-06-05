import { FC, memo, useState } from 'react';

import StarIcon from '../../../assets/icons/newStarIcon.svg';
import StarIconOld from '../../../assets/icons/star.svg';
import { Icon as IconDeprecated } from '../../deprecated/Icon/Icon';
import { Icon } from '../../redesigned/Icon/Icon';

import { classNames } from '@/shared/lib';
import { ToggleFeature, toggleFeature } from '@/shared/lib/featureFlags';

import cls from './StarRating.module.scss';

interface StarRatingProps {
  className?: string;
  size?: number | string;
  onSelect?: (starNumber: number) => void;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating: FC<StarRatingProps> = memo((props) => {
  const { className, size = 30, onSelect, selectedStars = 0 } = props;

  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));
  const [currentStarCount, setCurrentStarCount] = useState(selectedStars);

  const onHover = (starNumber: number) => () => {
    if (!isSelected) {
      setCurrentStarCount(starNumber);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarCount(0);
    }
  };

  const onClick = (starNumber: number) => () => {
    if (!isSelected) {
      onSelect?.(starNumber);
      setCurrentStarCount(starNumber);
      setIsSelected(true);
    }
  };

  const Svg = toggleFeature({
    name: 'isAppRedesigned',
    off: () => StarIconOld,
    on: () => StarIcon,
  });

  return (
    <div
      className={classNames(
        toggleFeature({ name: 'isAppRedesigned', off: () => cls.starRating, on: () => cls.starRatingRedesigned }),
        [className],
        {}
      )}
    >
      {stars.map((starNumber) => {
        const commonProps = {
          className: classNames(cls.starIcon, [currentStarCount >= starNumber ? cls.hovered : cls.normal], {
            [cls.selected]: isSelected,
          }),
          Svg,
          width: size,
          height: size,
          onMouseEnter: onHover(starNumber),
          onMouseLeave: onLeave,
          onClick: onClick(starNumber),
          'data-testid': `StarRating.Star-${starNumber}`,
          'data-selected': currentStarCount >= starNumber,
        };

        return (
          <ToggleFeature
            key={starNumber}
            name='isAppRedesigned'
            off={<IconDeprecated {...commonProps} />}
            on={<Icon clickable={!isSelected} {...commonProps} />}
          />
        );
      })}
    </div>
  );
});
