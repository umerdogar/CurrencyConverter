// src/__tests__/exchangeRate.test.ts
import { fetchRates } from '../api/exchangeRate';

const mockRates = {
  USD: { rate: 1.26, name: 'US Dollar', symbol: '$' },
  EUR: { rate: 1.16, name: 'Euro', symbol: '€' },
  JPY: { rate: 191.63, name: 'Japanese Yen', symbol: '¥' },
};

describe('fetchRates', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('fetches rates successfully for a given currency', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockRates,
    });

    const result = await fetchRates('GBP');
    expect(result).toEqual(mockRates);
  });

  it('calls the correct URL with lowercase currency code', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockRates,
    });

    await fetchRates('GBP');
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('/rates/gbp'),
      expect.any(Object)
    );
  });

  it('includes the api key in headers', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockRates,
    });

    await fetchRates('GBP');
    expect(global.fetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        headers: expect.objectContaining({
          'x-api-key': expect.any(String),
        }),
      })
    );
  });

  it('throws an error when response is not ok', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    });

    await expect(fetchRates('GBP')).rejects.toThrow('Failed to fetch rates for GBP');
  });
});