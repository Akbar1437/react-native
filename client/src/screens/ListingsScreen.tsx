import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { getListings } from "../api/listings";
import { StackNavigationParams } from "../App";
import { ActivityIndicator } from "../components/ActivityIndicator";
import AppText from "../components/AppText";
import AppButton from "../components/Button";
import Card from "../components/Card";
import Screen from "../components/Screen";
import { colors } from "../config/colors";
import { useApi } from "../hooks/useApi";
import { ListingsType } from "../types/types";

type ListingsProps = NativeStackScreenProps<StackNavigationParams, "Listings">;

export default function ListingsScreen({ navigation }: ListingsProps) {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  }: {
    data: ListingsType[];
    error: boolean;
    loading: boolean;
    request: () => void;
  } = useApi(getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn`t retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => {
              navigation.navigate("ListingDetails", item);
            }}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
