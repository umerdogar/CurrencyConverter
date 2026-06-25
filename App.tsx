import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from "@screens/SplashScreen";
import ConversionScreen from "@screens/ConversionScreen";
import { loadPreferences } from "@storage";
import { fetchRates } from "@api";

const queryClient = new QueryClient();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [fromCurrency, setFromCurrency] = useState("GBP");
  const [toCurrency, setToCurrency] = useState("USD");

  const handleReady = async () => {
    const { from, to } = await loadPreferences();
    setFromCurrency(from);
    setToCurrency(to);

    await queryClient.prefetchQuery({
      queryKey: ["rates", from],
      queryFn: () => fetchRates(from),
    });

    setIsReady(true);
  };

  if (!isReady) {
    return <SplashScreen onReady={handleReady} />;
  }

  return (
    <SafeAreaProvider>
    <QueryClientProvider client={queryClient}>
      <ConversionScreen
        initialFromCurrency={fromCurrency}
        initialToCurrency={toCurrency}
      />
    </QueryClientProvider>
    </SafeAreaProvider>
  );
}
