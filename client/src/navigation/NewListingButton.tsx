import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function NewListingButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors["primary"],
    borderColor: colors.white,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 20,
    height: 80,
    width: 80,
  },
});
