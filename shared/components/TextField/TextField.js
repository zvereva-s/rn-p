import React from "react";
import { StyleSheet, TextInput } from "react-native";

function TextField({ key, type, placeholder, secureTextEntry }) {
  return (
    <TextInput
      style={styles[type]}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
    />
  );
}

const styles = StyleSheet.create({
  inputAuth: {
    position: "relative",
    backgroundColor: "#F6F6F6",

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 8,

    marginHorizontal: 16,
    marginTop: 16,

    padding: 16,

    height: 40,
    width: "100%",
  },
});

export default TextField;
