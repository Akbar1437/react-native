import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

export default function FormImagePicker({ name }: { name: string }) {
  const { errors, setFieldValue, touched, values }: any = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri: string) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  function handleRemove(uri: string) {
    setFieldValue(
      name,
      imageUris.filter((item: string) => item !== uri)
    );
  }
  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
