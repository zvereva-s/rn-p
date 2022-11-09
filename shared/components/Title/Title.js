import React from "react";
import { StyleSheet, Text } from "react-native";

function Title({ text }) {
  return <Text style={styles.title}>{text}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 32,
    letterSpacing: 0.01,
    color: "#212121",
    marginBottom: 23,
  },
});
export default Title;
