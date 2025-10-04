import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

interface InputProps extends TextInputProps {
  variant?: "default" | "multiline";
}

export const Input = ({ variant = "default", ...props }: InputProps) => {
  return (
    <TextInput
      style={[styles.input, variant === "multiline" && styles.multiline]}
      placeholderTextColor="#aaaaaa"
      {...props}
    />
  );
};
