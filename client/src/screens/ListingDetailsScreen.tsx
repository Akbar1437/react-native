import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { StackNavigationParams } from "../App";
import AppText from "../components/AppText";
import ListItem from "../components/list/LlistItem";
import { colors } from "../config/colors";

type ListingDetailsScreenProps = NativeStackScreenProps<
  StackNavigationParams,
  "ListingDetails"
>;

export default function ListingDetailsScreen({
  route: { params },
}: ListingDetailsScreenProps) {
  return (
    <View key={params.id}>
      <Image style={styles.image} source={{ uri: params.images[0].url }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{params.title}</AppText>
        <AppText style={styles.price}>{params.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Tony Cark"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  userContainer: {
    marginVertical: 40,
  },
  price: {
    color: colors["secondary"],
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});
