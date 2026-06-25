// src/components/AmountInput.tsx
import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import { colors, fontSizes, spacing, borderRadius } from '@styles';

interface Props {
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  currency?: string;
  symbol?: string;

}

export const AmountInput = ({ value, onChangeText, placeholder = "0.00" , currency , symbol }: Props) => {

  const handleChange = (text: string) => {
    if (currency === 'JPY') {
      // Only allow whole numbers for JPY
      const cleaned = text.replace(/[^0-9]/g, '');
      onChangeText(cleaned);
    } else {
      // Allow up to 2 decimal places for others
      const cleaned = text.replace(/[^0-9.]/g, '');
      const parts = cleaned.split('.');
      if (parts.length > 2) return; // prevent multiple dots
      if (parts[1]?.length > 2) return; // prevent more than 2 decimals
      onChangeText(cleaned);
    }
  };
  return (
    <View style={styles.container}>
    {symbol && <Text style={styles.symbol}>{symbol}</Text>}
    <TextInput
      style={styles.input}
      keyboardType={currency === 'JPY' ? 'number-pad' : 'decimal-pad'}
      placeholder={currency === 'JPY' ? '0' : placeholder}
      placeholderTextColor={colors.placeholder}
      value={value}
      onChangeText={handleChange}
    />
  </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.md,
  },
  symbol: {
    fontSize: fontSizes.md,
    color: colors.textSecondary,
    marginRight: spacing.sm,
  },
  input: {
    flex: 1,
    padding: spacing.md,
    fontSize: fontSizes.md,
    color: colors.textPrimary,
  },

});

