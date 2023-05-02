export type OrderType = 'asc' | 'desc';

export type Theme = ValueOf<typeof Theme>;
export const Theme = {
  DARK: 'app_theme_dark',
  LIGHT: 'app_theme_light',
  BLUE: 'app_theme_blue',
} as const;
