import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppFormFileld from "../components/form/AppFormFileld";
import Picker from "../components/form/AppFormPicker";
import FormImagePicker from "../components/form/FormImagePicker";
import SubmitButton from "../components/form/SubmitButton";
import Screen from "../components/Screen";
import { useLocation } from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

export default function ListingEditScreen() {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => {
          console.log(location);
        }}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <FormImagePicker name="images" />
            <AppFormFileld maxLength={255} name="title" placeholder="Title" />
            <AppFormFileld
              keyboardType="numeric"
              maxLength={8}
              name="price"
              placeholder="Price"
              width={120}
            />
            <Picker
              items={categories}
              PickerItemComponent={CategoryPickerItem}
              name="category"
              placeholder="Category"
              width="50%"
            />
            <AppFormFileld
              multiline
              maxLength={255}
              name="description"
              numberOfLines={3}
              placeholder="Description"
            />
            <SubmitButton title="Post" />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
