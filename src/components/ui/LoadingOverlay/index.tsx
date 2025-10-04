import { colors } from "@/src/constants/colors";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "./styles";

interface LoadingOverlayProps {
  text?: string;
}

export const LoadingOverlay = ({
  text = "Carregando...",
}: LoadingOverlayProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  );
};
