import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import { colors } from "../config/colors";

export default function AppButton({
  title,
  color = "primary",
  ...options
}: {
  title: string;
  color?: string;
} & TouchableOpacityProps) {
  return (
    <TouchableOpacity
      {...options}
      style={[styles.button, { backgroundColor: colors[color] }]}
    >
      <>
        <Text style={styles.text}>{title}</Text>
      </>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignContent: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
  },
});
