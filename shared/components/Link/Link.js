import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function Link({ text, path }) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.link}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {},
  text: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  wrapper: {},
});

export default Link;
