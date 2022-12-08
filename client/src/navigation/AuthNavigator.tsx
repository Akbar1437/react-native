import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { StackNavigationParams } from "../App";

const Stack = createNativeStackNavigator<StackNavigationParams>();

export const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
