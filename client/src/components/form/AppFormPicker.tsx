import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet } from "react-native";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

export default function AppFormPicker<T>({
  items,
  name,
  placeholder,
  width,
  PickerItemComponent,
}: {
  items: any[];
  name: T;
  placeholder: string;
  width: number | string;
  PickerItemComponent: any;
}) {
  const { errors, setFieldValue, touched, values }: any = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        PickerItemComponent={PickerItemComponent}
        onSelectItem={(item) => setFieldValue(name as string, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
