import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import {
  Button,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
import Screen from "./components/Screen";
import ListingEditScreen from "./screens/ListingEditScreen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { useEffect, useState } from "react";
import ImageInput from "./components/ImageInput";
import ImageInputList from "./components/ImageInputList";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "./components/Icon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AuthNavigator } from "./navigation/AuthNavigator";
import navigationTheme from "./config/navigationTheme";
import { AppNavigator } from "./navigation/AppNavigator";

export type StackNavigationParams = {
  Profile: undefined;
  Tweets: { id: number };
  TweetsDetails: { id: number };
  Feed: undefined;
  Account: undefined;
  AccountNavigator: undefined;
  Login: undefined;
  Welcome: undefined;
  Register: undefined;
  Listings: undefined;
  ListingEdit: undefined;
  ListingDetails: {
    id: number;
    title: string;
    images: {
      url: string;
      thumbnailUrl: string;
    }[];
    price: number;
    categoryId: number;
    userId: number;
    location: {
      latitude: number;
      longitude: number;
    };
  };
  Messages: undefined;
};

const Stack = createNativeStackNavigator<StackNavigationParams>();

type TweetsDetailsProps = NativeStackScreenProps<
  StackNavigationParams,
  "TweetsDetails"
>;
type TweetsProps = NativeStackScreenProps<StackNavigationParams, "Tweets">;

const Tweets = ({ navigation }: TweetsProps) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetsDetails", { id: 21 })}
    />
  </Screen>
);

const TweetsDetails = ({ route }: TweetsDetailsProps) => (
  <Screen>
    <Text>TweetsDetails {route.params.id}</Text>
  </Screen>
);

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
        headerShown: false,
      }}
    />
    <Stack.Screen name="TweetsDetails" component={TweetsDetails} />
  </Stack.Navigator>
);
const Feed = () => (
  <Screen>
    <Text>Feed</Text>
  </Screen>
);

const AccountNavigator = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator<StackNavigationParams>();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: "tomato",
      tabBarInactiveBackgroundColor: "white",
      tabBarActiveTintColor: "#eee",
      tabBarInactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Account" component={AccountNavigator} />
  </Tab.Navigator>
);
export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
