import { colors } from "@/src/constants/colors";
import { fonts } from "@/src/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(11, 0, 0, 0.8)",
  },
  text: {
    color: colors.text.secondary,
    marginTop: 10,
    fontSize: fonts.sizes.md,
  },
});
