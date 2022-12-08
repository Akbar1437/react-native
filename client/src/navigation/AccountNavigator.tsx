import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackNavigationParams } from "../App";
import MessagesScreen from "../screens/MessagesScreen";
import AccountScreen from "../screens/AccountScreen";

const Stack = createNativeStackNavigator<StackNavigationParams>();

export function AccountNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
  );
}
