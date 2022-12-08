import React, { PropsWithChildren } from "react";
import { Text, TextProps, TextStyle, StyleSheet, Platform } from "react-native";

export default function AppText({
  children,
  style,
  ...otherProps
}: PropsWithChildren<{
  style?: TextStyle;
}> &
  TextProps) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
