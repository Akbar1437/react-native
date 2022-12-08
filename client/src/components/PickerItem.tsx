import React from "react";
import { Pressable, StyleSheet } from "react-native";
import AppText from "./AppText";

export default function PickerItem({
  item,
  onPress,
}: {
  item: any;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
