type Mods = Record<string, string | boolean>;

export const classNames = (cls: string, additional: string[] = [], mods: Mods = {}) => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
};
