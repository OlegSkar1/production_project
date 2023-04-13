export type Currency = ValueOf<typeof Currency>;

export const Currency = {
  RUB: 'RUB',
  EUR: 'EUR',
  USD: 'USD',
} as const;
