import React from "react";
import LottieView from "lottie-react-native";

export function ActivityIndicator({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      loop
      source={require("../assets/animations/loader.json")}
    />
  );
}
