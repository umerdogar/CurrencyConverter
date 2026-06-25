// src/styles/splashStyles.ts
import { StyleSheet } from "react-native";
import { colors, fontSizes, spacing } from "../../styles";

export const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.md,
  },
  iconContainer: {
    marginBottom: spacing.sm,
  },
  icon: {
    fontSize: 64,
  },
  title: {
    fontSize: fontSizes.xxl,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: fontSizes.md,
    color: colors.textSecondary,
  },
});
