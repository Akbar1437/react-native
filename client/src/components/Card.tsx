import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { colors } from "../config/colors";
import AppText from "./AppText";

export default function Card({
  title,
  subTitle,
  imageUrl,
  onPress,
}: {
  title: string;
  subTitle: string;
  imageUrl: any;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
