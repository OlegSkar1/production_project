import { FC, memo, useState } from 'react';

import cls from './StarRating.module.scss';

import StarIcon from '../../assets/icons/star.svg';
import { Icon } from '../Icon/Icon';

import { classNames } from '@/shared/lib';

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
  const [currentStarCount, setCurrentStarCount] = useState(0);

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

  return (
    <div className={classNames('', [className], {})}>
      {stars.map((starNumber) => (
        <Icon
          Svg={StarIcon}
          key={starNumber}
          className={classNames(
            cls.starRating,
            [className, currentStarCount >= starNumber ? cls.hovered : cls.normal],
            {}
          )}
          width={size}
          height={size}
          onMouseEnter={onHover(starNumber)}
          onMouseLeave={onLeave}
          onClick={onClick(starNumber)}
        />
      ))}
    </div>
  );
});
