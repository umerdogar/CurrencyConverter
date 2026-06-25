// src/__tests__/getDecimalPlaces.test.ts
const getDecimalPlaces = (currency: string) => (currency === 'JPY' ? 0 : 2);

describe('getDecimalPlaces', () => {
  it('returns 0 for JPY', () => {
    expect(getDecimalPlaces('JPY')).toBe(0);
  });

  it('returns 2 for GBP', () => {
    expect(getDecimalPlaces('GBP')).toBe(2);
  });

  it('returns 2 for USD', () => {
    expect(getDecimalPlaces('USD')).toBe(2);
  });

  it('returns 2 for EUR', () => {
    expect(getDecimalPlaces('EUR')).toBe(2);
  });
});