import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  Platform,
  StyleSheet, TextInput,
  TextInputProps,
  View
} from "react-native";
import { colors } from "../config/colors";

export default function AppTextInput({
  icon,
  width = "100%",
  ...otherProps
}: { icon?: any; width?: number | string } & TextInputProps) {
  return (
    <View style={[styles.container, { width: width }]}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={20}
          color={colors.silver}
        />
      )}
      <TextInput
        placeholderTextColor={colors.silver}
        style={styles.textInput}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
  icon: {
    marginRight: 10,
  },
});
