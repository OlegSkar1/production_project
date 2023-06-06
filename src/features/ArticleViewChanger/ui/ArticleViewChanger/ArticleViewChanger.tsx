import { FC, memo } from 'react';

import { ArticleView } from '@/entities/Article';
import BurgerIcon from '@/shared/assets/icons/burger.svg';
import ListIcon from '@/shared/assets/icons/list.svg';
import GridIcon from '@/shared/assets/icons/tile.svg';
import TileIcon from '@/shared/assets/icons/tileNew.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeature, ToggleFeature } from '@/shared/lib/featureFlags';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticleViewChanger.module.scss';

interface ArticleViewChangerProps {
  className?: string;
  onViewClick: (view: ArticleView) => void;
  view?: ArticleView;
}

const viewTypes = [
  {
    view: ArticleView.GRID,
    icon: toggleFeature({
      name: 'isAppRedesigned',
      off: () => GridIcon,
      on: () => TileIcon,
    }),
  },
  {
    view: ArticleView.LIST,
    icon: toggleFeature({
      name: 'isAppRedesigned',
      off: () => ListIcon,
      on: () => BurgerIcon,
    }),
  },
];

export const ArticleViewChanger: FC<ArticleViewChangerProps> = memo((props) => {
  const { className, onViewClick, view } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick(newView);
  };

  return (
    <ToggleFeature
      name='isAppRedesigned'
      off={
        <div className={classNames('', [className], {})}>
          {viewTypes.map((viewType) => (
            <ButtonDeprecated
              key={viewType.view}
              onClick={onClick(viewType.view)}
              data-testid={`ArticleView-${viewType.view}`}
            >
              <IconDeprecated
                width={24}
                height={24}
                Svg={viewType.icon}
                className={classNames('', [], { [cls.notSelected]: viewType.view !== view })}
              />
            </ButtonDeprecated>
          ))}
        </div>
      }
      on={
        <Card padding='8' className={classNames(cls.articleViewChangerRedesigned, [className], {})}>
          <HStack gap='8'>
            {viewTypes.map((viewType) => (
              <Icon
                key={viewType.view}
                Svg={viewType.icon}
                className={classNames('', [], {
                  [cls.notSelectedRedesigned]: viewType.view !== view,
                })}
                clickable
                onClick={onClick(viewType.view)}
              />
            ))}
          </HStack>
        </Card>
      }
    />
  );
});
