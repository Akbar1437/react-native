import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet } from "react-native";
import AppButton from "../Button";

export default function SubmitButton({ title }: { title: string }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit as any} />;
}

const styles = StyleSheet.create({});
