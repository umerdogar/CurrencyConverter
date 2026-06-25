import { RatesResponse } from "@appTypes";

const BASE_URL = "http://192.168.1.228:8000";
// const BASE_URL = "http://localhost:8000";
const API_KEY = "85f7ccfd-677a-4e5a-a5eb-21c19734edf7";

export const fetchRates = async (
  currencyCode: string,
): Promise<RatesResponse> => {
  const response = await fetch(
    `${BASE_URL}/rates/${currencyCode.toLowerCase()}`,
    {
      headers: {
        "x-api-key": API_KEY,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch rates for ${currencyCode}`);
  }
  return response.json();
};
