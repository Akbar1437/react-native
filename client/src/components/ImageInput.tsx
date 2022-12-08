import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function ImageInput({
  imageUri,
  onChangeImage,
}: {
  imageUri?: string;
  onChangeImage: (value: string | null) => void;
}) {
  // ---------------------------------------
  // vairables
  // ---------------------------------------

  // ---------------------------------------
  // effects
  // ---------------------------------------
  
  useEffect(() => {
    requestPermission();
  }, []);

  // ---------------------------------------
  // functions
  // ---------------------------------------

  const requestPermission = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!result.granted) {
      alert("You need to enable permission to access the library.");
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };
  // ------------------------------------
  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.silver}
            name="camera"
            size={40}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ligth,
    borderRadius: 15,
    justifyContent: "center",
    overflow: "hidden",
    height: 100,
    width: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
