import { colors } from "@/src/constants/colors";
import { fonts } from "@/src/constants/fonts";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  input: {
    width: "100%",
    backgroundColor: colors.cardBackground,
    borderRadius: 8,
    padding: 15,
    color: colors.text.primary,
    fontSize: fonts.sizes.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 20,
  },
  multiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
