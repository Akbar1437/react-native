import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppButton from "../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationParams } from "../App";
import { useNavigation } from "@react-navigation/core";

type Props = NativeStackScreenProps<StackNavigationParams, "Welcome">;

export function WelcomeScreen({ navigation }: Props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagLine}>Sell what You Don`t Need</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Registration"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
