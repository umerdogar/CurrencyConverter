// src/hooks/useExchangeRates.ts
import { useQuery } from "@tanstack/react-query";
import { fetchRates } from "@api";
import { RatesResponse } from "@appTypes";

export const useExchangeRates = (fromCurrency: string) => {
  const { data, isLoading, isError } = useQuery<RatesResponse>({
    queryKey: ["rates", fromCurrency],
    queryFn: () => fetchRates(fromCurrency),
    staleTime: 1000 * 60 * 5,
    placeholderData: (previousData) => previousData, 

  });

  const currencies = data 
  ? [...new Set([...Object.keys(data), fromCurrency])].sort() 
  : [];
  return {
    rates: data,
    currencies,
    isLoading,
    isError,
  };
};
