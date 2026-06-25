// src/__tests__/currencySymbols.test.ts
import { currencySymbols } from '../utils/currencySymbols';

describe('currencySymbols', () => {
  it('returns correct symbol for GBP', () => {
    expect(currencySymbols['GBP']).toBe('£');
  });

  it('returns correct symbol for EUR', () => {
    expect(currencySymbols['EUR']).toBe('€');
  });

  it('returns correct symbol for JPY', () => {
    expect(currencySymbols['JPY']).toBe('¥');
  });

  it('returns correct symbol for USD', () => {
    expect(currencySymbols['USD']).toBe('$');
  });

  it('returns undefined for unknown currency', () => {
    expect(currencySymbols['XYZ']).toBeUndefined();
  });
});