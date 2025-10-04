import { colors } from "@/src/constants/colors";
import { fonts } from "@/src/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.cardBackground,
    borderWidth: 1,
    borderColor: colors.border,
  },
  disabled: {
    opacity: 0.7,
  },
  buttonText: {
    fontSize: fonts.sizes.lg,
    fontWeight: "bold",
  },
  primaryText: {
    color: colors.background,
  },
  secondaryText: {
    color: colors.text.primary,
  },
});
