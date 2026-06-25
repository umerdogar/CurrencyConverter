// src/types/currency.ts
export interface CurrencyRate {
  rate: number;
  name: string;
  symbol: string;
}

export type RatesResponse = Record<string, CurrencyRate>;

export interface CurrencyOption {
  code: string;
  name: string;
  symbol: string;
  rate: number;
}
