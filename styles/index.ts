import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#0b0000",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#df0707",
    fontFamily: "CineFont",
  },
  subtitle: {
    fontSize: 16,
    color: "#ccc",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    width: "100%",
    minHeight: 100,
    backgroundColor: "#1c1c1c",
    borderRadius: 8,
    padding: 15,
    color: "#fff",
    fontSize: 16,
    textAlignVertical: "top",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#df070750",
  },
  button: {
    width: "100%",
    backgroundColor: "#df0707",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#0b0000",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  resultsContainer: {
    marginTop: 30,
    width: "100%",
    padding: 15,
    backgroundColor: "#1c1c1c",
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: "#df0707",
  },
  resultsHeader: {
    color: "#df0707",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  resultItem: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 24,
  },
});
