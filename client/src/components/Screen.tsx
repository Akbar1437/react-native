import Constants from "expo-constants";
import React, { PropsWithChildren } from "react";
import { SafeAreaView, StyleSheet, TextStyle, View } from "react-native";

export default function Screen({
  children,
  style,
}: PropsWithChildren<{ style?: TextStyle }>) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});
