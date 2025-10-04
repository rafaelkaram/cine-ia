import { colors } from "@/src/constants/colors";
import { fonts } from "@/src/constants/fonts";
import { Dimensions, StyleSheet } from "react-native";

const { height: screenHeight } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: colors.text.secondary,
    marginTop: 10,
    fontSize: fonts.sizes.md,
  },
  scrollContainer: {
    flex: 1,
  },
  header: {
    height: screenHeight * 0.3,
    position: "relative",
    overflow: "hidden",
  },
  backdrop: {
    width: "100%",
    height: "100%",
  },
  backdropPlaceholder: {
    backgroundColor: colors.cardBackground,
  },
  linearGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
  },
  closeButton: {
    position: "absolute",
    top: 50,
    right: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    color: colors.text.primary,
    fontSize: fonts.sizes.lg,
    fontWeight: "bold",
  },
  content: {
    padding: 20,
  },
  mainInfo: {
    flexDirection: "row",
    marginBottom: 25,
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 10,
    marginRight: 15,
  },
  titleSection: {
    flex: 1,
    justifyContent: "flex-start",
  },
  typeRatingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    flexWrap: "wrap",
  },
  mediaTypeBadge: {
    backgroundColor: colors.primary,
    color: colors.text.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: fonts.sizes.xs,
    fontWeight: "bold",
    marginRight: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingWithIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    color: colors.accent.gold,
    fontSize: fonts.sizes.md,
    fontWeight: "bold",
    marginLeft: 4,
  },
  voteCount: {
    color: colors.text.muted,
    fontSize: fonts.sizes.xs,
    marginLeft: 4,
  },
  title: {
    color: colors.text.primary,
    fontSize: fonts.sizes.xxl,
    fontWeight: "bold",
    marginBottom: 10,
    lineHeight: 28,
  },
  genresContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  genre: {
    color: colors.primary,
    fontSize: fonts.sizes.sm,
    marginRight: 8,
    marginBottom: 4,
  },
  detailsSection: {
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  detailLabel: {
    color: colors.text.muted,
    fontSize: fonts.sizes.sm,
  },
  detailValue: {
    color: colors.text.primary,
    fontSize: fonts.sizes.sm,
    fontWeight: "500",
  },
  overviewSection: {
    marginBottom: 30,
  },
  overviewTitle: {
    color: colors.text.primary,
    fontSize: fonts.sizes.xl,
    fontWeight: "bold",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 5,
  },
  overviewText: {
    color: colors.text.secondary,
    fontSize: fonts.sizes.md,
    lineHeight: 24,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: colors.text.secondary,
    fontSize: fonts.sizes.md,
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  retryButtonText: {
    color: colors.text.primary,
    fontWeight: "bold",
  },
});
