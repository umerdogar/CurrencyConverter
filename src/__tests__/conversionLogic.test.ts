// src/__tests__/conversionLogic.test.ts

const getDecimalPlaces = (currency: string) => (currency === 'JPY' ? 0 : 2);

const convertFromTo = (amount: number, rate: number, toCurrency: string) => {
  return parseFloat((amount * rate).toFixed(getDecimalPlaces(toCurrency)));
};

const convertToFrom = (amount: number, rate: number, fromCurrency: string) => {
  return parseFloat((amount / rate).toFixed(getDecimalPlaces(fromCurrency)));
};

describe('conversion logic', () => {
  describe('convertFromTo', () => {
    it('converts GBP to USD correctly', () => {
      expect(convertFromTo(1, 1.2638436, 'USD')).toBe(1.26);
    });

    it('converts GBP to JPY with 0 decimal places', () => {
      expect(convertFromTo(1, 191.63238, 'JPY')).toBe(192);
    });

    it('converts GBP to EUR correctly', () => {
      expect(convertFromTo(10, 1.1661482, 'EUR')).toBe(11.66);
    });

    it('returns 0 when amount is 0', () => {
      expect(convertFromTo(0, 1.2638436, 'USD')).toBe(0);
    });
  });

  describe('convertToFrom', () => {
    it('converts USD back to GBP correctly', () => {
      expect(convertToFrom(1.26, 1.2638436, 'GBP')).toBe(1.0);
    });

    it('converts JPY back to GBP with 2 decimal places', () => {
      expect(convertToFrom(192, 191.63238, 'GBP')).toBe(1.0);
    });

    it('returns 0 when amount is 0', () => {
      expect(convertToFrom(0, 1.2638436, 'GBP')).toBe(0);
    });
  });
});