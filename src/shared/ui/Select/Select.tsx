import { ChangeEvent, memo, useMemo } from 'react';

import cls from './Select.module.scss';

import { classNames } from 'shared/lib';

interface OptionList {
  value: string;
  content: string;
}

interface selectProps {
  className?: string;
  options?: OptionList[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
  label?: string;
}

export const Select: React.FC<selectProps> = memo((props) => {
  const { className, options, value, onChange, readonly, label } = props;

  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option value={opt.value} key={opt.value} className={cls.option}>
          {opt.content}
        </option>
      )),
    [options]
  );

  const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.wrapper, [className], {})}>
      {label && <span>{label}</span>}
      <select disabled={readonly} value={value} className={cls.select} onChange={changeHandler}>
        {optionsList}
      </select>
    </div>
  );
});
