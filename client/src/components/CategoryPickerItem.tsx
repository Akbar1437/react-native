import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon } from "./Icon";
import AppText from "./AppText";

export default function CategoryPickerItem({
  item,
  onPress,
}: {
  item: any;
  onPress: () => void;
}) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
