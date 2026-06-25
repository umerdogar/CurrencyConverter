// src/components/AmountInput.tsx
import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { colors } from "@styles/colors";
import { fontSizes } from "@styles/typography";
import { spacing } from "@styles/spacing";
import { borderRadius } from "@styles/spacing";

interface Props {
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
}

const AmountInput = ({ value, onChangeText, placeholder = "0.00" }: Props) => {
  return (
    <TextInput
      style={styles.input}
      keyboardType="numeric"
      placeholder={placeholder}
      placeholderTextColor={colors.placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    padding: spacing.md,
    fontSize: fontSizes.md,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
});

export default AmountInput;
