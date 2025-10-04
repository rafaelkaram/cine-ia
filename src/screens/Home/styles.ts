import { colors } from "@/src/constants/colors";
import { fonts } from "@/src/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 50,
    flexGrow: 1,
  },
  resultsList: {
    marginTop: 25,
    width: "100%",
  },
  resultsHeader: {
    color: colors.text.primary,
    fontSize: fonts.sizes.xl,
    fontWeight: "bold",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 5,
  },
});
