import { RatesResponse } from "@appTypes";

const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const fetchRates = async (currencyCode: string): Promise<RatesResponse> => {
  const response = await fetch(
    `${BASE_URL}/rates/${currencyCode.toLowerCase()}`,
    {
      headers: {
        "x-api-key": API_KEY ?? '',
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch rates for ${currencyCode}`);
  }
  return response.json();
};