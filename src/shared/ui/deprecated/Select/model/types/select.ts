export interface OptionList<T extends string> {
  value: T;
  content: string;
}

export interface SelectProps<T extends string> {
  className?: string;
  options?: OptionList<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
  label?: string;
}
