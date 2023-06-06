import { FC, memo, SVGProps } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

type SvgProps = Omit<SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
  className?: string;
  Svg: FC<SVGProps<SVGSVGElement>>;
}

interface ClickableIconProps extends IconBaseProps {
  clickable: true;
  onClick: () => void;
}

interface NonClickableIconProps extends IconBaseProps {
  clickable?: false;
}

type IconProps = ClickableIconProps | NonClickableIconProps;

export const Icon: FC<IconProps> = memo((props) => {
  const { Svg, className, width = 32, height = 32, clickable, ...otherProps } = props;

  const icon = (
    <Svg
      className={classNames(cls.icon, [className], {})}
      width={width}
      height={height}
      {...otherProps}
      onClick={undefined}
    />
  );

  if (clickable) {
    return (
      <button type='button' onClick={props.onClick} className={cls.button} style={{ width, height }}>
        {icon}
      </button>
    );
  }

  return icon;
});
