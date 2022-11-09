import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function Button({ text }) {
  return (
    <View style={styles.wrapperBtn}>
      <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
        <Text style={styles.btnTitle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperBtn: {
    marginTop: 40,
    marginHorizontal: 16,
    width: "100%",
  },
  btn: {
    padding: 16,

    backgroundColor: "#FF6C00",
    borderRadius: 100,

    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: "19",

    color: "#FFF",
  },
});

export default Button;
