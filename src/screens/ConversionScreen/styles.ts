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
    fontSize: fontSizes.lg,
    fontWeight: "700",
    color: colors.textPrimary,
    textAlign: "center",
    marginBottom: spacing.md,
  },
  toLabel: {
    fontSize: fontSizes.lg,
    fontWeight: "700",
    color: colors.textPrimary,
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
    fontSize: fontSizes.md,
    color: colors.textPrimary,
    textAlign: "center",
    marginBottom: spacing.md,
  },
  error: {
    flex: 1,
    textAlign: "center",
    color: colors.primary,
    marginTop: spacing.xxl,
  },
  postImage:{
    alignSelf:"center"
  },
  swapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    marginVertical: spacing.md,
  },
  swapText: {
    fontSize: fontSizes.xl,
    color: colors.primary,
    fontWeight: '700',
  },
});
