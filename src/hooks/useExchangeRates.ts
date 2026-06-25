// src/hooks/useExchangeRates.ts
import { useQuery } from "@tanstack/react-query";
import { fetchRates } from "@api";
import { RatesResponse } from "@appTypes";

export const useExchangeRates = (fromCurrency: string) => {
  const { data, isLoading, isError } = useQuery<RatesResponse>({
    queryKey: ["rates", fromCurrency],
    queryFn: () => fetchRates(fromCurrency),
  });

  const currencies = data ? [...Object.keys(data), fromCurrency].sort() : [];

  return {
    rates: data,
    currencies,
    isLoading,
    isError,
  };
};
