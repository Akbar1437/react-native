import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, TextInputProps } from "react-native";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

export default function AppFormFileld<T extends string>({
  name,
  icon,
  width,
  ...otherProps
}: { name: T; icon?: T; width?: number | string } & TextInputProps) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        icon={icon}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
