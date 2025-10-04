import { colors } from "@/src/constants/colors";
import { fonts } from "@/src/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.border,
  },
  poster: {
    width: 100,
    height: 150,
  },
  posterPlaceholder: {
    width: 100,
    height: 150,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    color: colors.text.muted,
    fontSize: fonts.sizes.xs,
    textAlign: "center",
    padding: 5,
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  mediaType: {
    color: colors.primary,
    fontSize: fonts.sizes.xs,
    fontWeight: "bold",
    marginBottom: 4,
  },
  title: {
    color: colors.text.primary,
    fontSize: fonts.sizes.lg,
    fontWeight: "bold",
    marginBottom: 5,
  },
  overview: {
    color: colors.text.secondary,
    fontSize: fonts.sizes.sm,
  },
  tapHint: {
    color: colors.primary,
    fontSize: fonts.sizes.xs,
    marginTop: 5,
    fontStyle: "italic",
  },
});
