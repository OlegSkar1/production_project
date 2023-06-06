import { ChangeEvent, memo, useCallback, useMemo } from 'react';

import { HStack } from '../../../redesigned/Stack';
import { SelectProps } from '../model/types/select';

import { classNames } from '@/shared/lib';

import cls from './Select.module.scss';

const typedMemo: <T>(cb: T) => T = memo;

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
  const { className, options, value, onChange, readonly, label, ...otherProps } = props;

  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option value={opt.value} key={opt.value} className={cls.option}>
          {opt.content}
        </option>
      )),
    [options]
  );

  const changeHandler = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value as T);
    },
    [onChange]
  );

  return (
    <HStack gap='16' className={classNames(cls.wrapper, [className], {})}>
      {label && <span>{label}</span>}
      <select disabled={readonly} value={value} className={cls.select} onChange={changeHandler} {...otherProps}>
        {optionsList}
      </select>
    </HStack>
  );
});
