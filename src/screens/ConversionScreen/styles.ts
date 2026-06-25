// src/styles/conversionStyles.ts
import { StyleSheet } from "react-native";
import { colors } from "@styles/colors";
import { fontSizes } from "@styles/typography";
import { spacing } from "@styles/spacing";
import { borderRadius } from "@styles/spacing";

export const conversionStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
    paddingTop: spacing.xxl,
  },
  label: {
    fontSize: fontSizes.xl,
    fontWeight: "700",
    color: colors.textPrimary,
    textAlign: "center",
    marginBottom: spacing.md,
  },
  toLabel: {
    fontSize: fontSizes.md,
    color: colors.textSecondary,
    textAlign: "center",
    marginVertical: spacing.md,
  },

  input: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    padding: spacing.md,
    fontSize: fontSizes.md,
    color: colors.textPrimary,
  },
  rateLabel: {
    fontSize: fontSizes.sm,
    color: colors.textSecondary,
    textAlign: "center",
    marginBottom: spacing.md,
  },
  error: {
    flex: 1,
    textAlign: "center",
    color: colors.primary,
    marginTop: spacing.xxl,
  },
});
