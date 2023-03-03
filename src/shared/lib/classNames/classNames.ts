type Mods = Record<string, string | boolean | undefined>;

export const classNames = (cls: string, additional: Array<string | undefined> = [], mods: Mods = {}) => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
};
