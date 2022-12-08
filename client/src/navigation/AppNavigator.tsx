import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StackNavigationParams } from "../App";
import ListingEditScreen from "../screens/ListingEditScreen";
import { AccountNavigator } from "./AccountNavigator";
import { FeedNavigator } from "./FeedNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingButton from "./NewListingButton";
const Tab = createBottomTabNavigator<StackNavigationParams>();

export const AppNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="ListingEdit"
      component={ListingEditScreen}
      options={({ navigation, route }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate("ListingEdit")}
          />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
      })}
    />
    <Tab.Screen
      name="AccountNavigator"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);
