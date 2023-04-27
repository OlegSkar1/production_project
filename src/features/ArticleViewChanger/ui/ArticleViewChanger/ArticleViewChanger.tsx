import { FC, memo } from 'react';

import cls from './ArticleViewChanger.module.scss';

import { ArticleView } from '@/entities/Article';
import ListIcon from '@/shared/assets/icons/list.svg';
import GridIcon from '@/shared/assets/icons/tile.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, Icon } from '@/shared/ui';

interface ArticleViewChangerProps {
  className?: string;
  onViewClick: (view: ArticleView) => void;
  view?: ArticleView;
}

const viewTypes = [
  {
    view: ArticleView.GRID,
    icon: GridIcon,
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
];

export const ArticleViewChanger: FC<ArticleViewChangerProps> = memo((props) => {
  const { className, onViewClick, view } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick(newView);
  };

  return (
    <div className={classNames('', [className], {})}>
      {viewTypes.map((viewType) => (
        <Button key={viewType.view} onClick={onClick(viewType.view)}>
          <Icon Svg={viewType.icon} className={classNames('', [], { [cls.notSelected]: viewType.view !== view })} />
        </Button>
      ))}
    </div>
  );
});
