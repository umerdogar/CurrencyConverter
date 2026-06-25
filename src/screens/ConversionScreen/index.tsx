import React, { useState } from "react";
import { View, Text, Alert, ActivityIndicator, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { conversionStyles as styles } from "./styles";
import { CurrencyPicker ,AmountInput  } from "@components";  
import { useExchangeRates } from "@hooks/useExchangeRates";
import { currencySymbols } from '@utils/currencySymbols';
import { savePreferences } from "@storage";
import { colors } from "@styles/colors";
import SwapIcon from '@assets/svg/SwapFrom.svg';

const getDecimalPlaces = (currency: string) => (currency === "JPY" ? 0 : 2);

interface Props {
  initialFromCurrency: string;
  initialToCurrency: string;
}

export default function ConversionScreen({
  initialFromCurrency,
  initialToCurrency,
}: Props) {
  const [fromCurrency, setFromCurrency] = useState(initialFromCurrency);
  const [toCurrency, setToCurrency] = useState(initialToCurrency);
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const insets = useSafeAreaInsets();

  const { rates, currencies, isLoading, isError } =
    useExchangeRates(fromCurrency);

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value);
    if (!value || !rates) {
      setToAmount("");
      return;
    }
    const rate = rates[toCurrency]?.rate;
    if (rate) {
      const decimals = getDecimalPlaces(toCurrency);
      setToAmount((parseFloat(value) * rate).toFixed(decimals));
    }
  };

  const handleToAmountChange = (value: string) => {
    setToAmount(value);
    if (!value || !rates) {
      setFromAmount("");
      return;
    }
    const rate = rates[toCurrency]?.rate;
    if (rate) {
      const decimals = getDecimalPlaces(fromCurrency);
      setFromAmount((parseFloat(value) / rate).toFixed(decimals));
    }
  };

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount('');
    setToAmount('');
    savePreferences(toCurrency, fromCurrency);
  };

  const handleFromCurrencyChange = (value: string) => {
    if (value === toCurrency) {
      Alert.alert(
        "Invalid Selection",
        "You cannot select the same currency on both sides.",
      );
      return;
    }
    setFromCurrency(value);
    setFromAmount("");
    setToAmount("");
    savePreferences(value, toCurrency);
  };

  const handleToCurrencyChange = (value: string) => {
    if (value === fromCurrency) {
      Alert.alert(
        "Invalid Selection",
        "You cannot select the same currency on both sides.",
      );
      return;
    }
    setToCurrency(value);
    setFromAmount("");
    setToAmount("");
    savePreferences(fromCurrency, value);
  };

  if (isLoading)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  if (isError)
    return (
      <Text style={styles.error}>
        Failed to load rates. Is the server running?
      </Text>
    );

  const toRate = rates?.[toCurrency]?.rate;
  const fromSymbol = currencySymbols[fromCurrency];
  const toSymbol = currencySymbols[toCurrency];
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={[styles.container, { paddingTop: insets.top }]}>
  
      <SwapIcon width={80} height={80} style={styles.postImage}/>
      <Text style={styles.label}>Swap from</Text>

      <CurrencyPicker
        selectedValue={fromCurrency}
        currencies={currencies}
        onValueChange={handleFromCurrencyChange}
        
      />

      <AmountInput value={fromAmount} onChangeText={handleFromAmountChange}  currency={fromCurrency} symbol={fromSymbol}
      />

      <TouchableOpacity style={styles.swapButton} onPress={handleSwapCurrencies}>
          <Text style={styles.swapText}>⇅</Text>
          {/* <Text style={styles.toLabel}>to</Text> */}
      </TouchableOpacity> 

      {toRate && (
        <Text style={styles.rateLabel}>
          {fromCurrency} {fromSymbol}1.00 = {toCurrency} {toSymbol}
          {toRate.toFixed(getDecimalPlaces(toCurrency))}
        </Text>
      )}

      <CurrencyPicker
        selectedValue={toCurrency}
        currencies={currencies}
        onValueChange={handleToCurrencyChange}
      />

      <AmountInput value={toAmount} onChangeText={handleToAmountChange} currency={toCurrency} symbol={toSymbol}
      />
    </View>
    </TouchableWithoutFeedback>
  );
}
