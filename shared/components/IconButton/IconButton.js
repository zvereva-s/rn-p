import React from "react";
import { SvgXml } from "react-native-svg";
import { StyleSheet, TouchableOpacity } from "react-native";

import { addIcon } from "./icons.js";

function IconButton({ type }) {
  const AddSvg = () => <SvgXml xml={addIcon} style={styles.icon} />;

  let svg;
  switch (type) {
    case "add":
      svg = <AddSvg />;
      break;
  }
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
      {svg}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {},
  icon: {
    width: 25,
    height: 25,
  },
});
export default IconButton;
