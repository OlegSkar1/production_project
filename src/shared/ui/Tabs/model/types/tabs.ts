import { ReactNode } from 'react';

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}
