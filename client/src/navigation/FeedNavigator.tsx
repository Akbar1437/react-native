import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import { StackNavigationParams } from "../App";

const Stack = createNativeStackNavigator<StackNavigationParams>();

export function FeedNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ presentation: "containedModal", headerShown: false }}
    >
      <Stack.Screen name="Listings" component={ListingsScreen} />
      <Stack.Screen
        name="ListingDetails"
        component={ListingDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
