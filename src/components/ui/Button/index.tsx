import React from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  variant?: "primary" | "secondary";
}

export const Button = ({
  title,
  loading = false,
  variant = "primary",
  disabled,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      style={[styles.button, styles[variant], isDisabled && styles.disabled]}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color="#0b0000" size="small" />
      ) : (
        <Text style={[styles.buttonText, styles[`${variant}Text`]]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
