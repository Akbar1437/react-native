import {
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef } from "react";
import ImageInput from "./ImageInput";
import { colors } from "../config/colors";

export default function ImageInputList({
  imageUris,
  onRemoveImage,
  onAddImage,
}: {
  imageUris: string[];
  onRemoveImage: (value: string) => void;
  onAddImage: (value: string) => void;
}) {
  const scrollView = useRef<any>(null);

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View style={styles.image}>
              <ImageInput
                key={uri}
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri!)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
