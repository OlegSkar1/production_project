export type Mods = Record<string, string | boolean | undefined>;

export type Additional = Array<string | undefined>;

export const classNames = (cls: string, additional: Additional = [], mods: Mods = {}) => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
};
