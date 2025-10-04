import { colors } from "@/src/constants/colors";
import { fonts } from "@/src/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: fonts.sizes.title,
    fontWeight: "bold",
    marginBottom: 20,
    color: colors.primary,
    fontFamily: fonts.cine,
  },
  subtitle: {
    fontSize: fonts.sizes.md,
    color: colors.text.secondary,
    textAlign: "center",
  },
});
