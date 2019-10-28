import React from "react";
import { View, ActivityIndicator, Text } from "react-native";

interface LoaderProps {
  size: number;
  backgroundColor: string;
  foregroundColor: string;
  spinnerColor: string;
  cornerRadius: number;
  title: string | null;
  titleColor: string;
}

export const Loader = ({
  size,
  backgroundColor,
  foregroundColor,
  spinnerColor,
  cornerRadius,
  title,
  titleColor
}: LoaderProps) => (
  <View
    style={{
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: backgroundColor,
      zIndex: 99999,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <View
      style={{
        borderRadius: cornerRadius,
        backgroundColor: foregroundColor,
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <ActivityIndicator color={spinnerColor} size="large" />
      {title && (
        <Text style={{ marginTop: 8, color: titleColor }}>{title}</Text>
      )}
    </View>
  </View>
);
