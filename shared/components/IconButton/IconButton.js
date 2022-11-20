import React from "react";
import { SvgXml } from "react-native-svg";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { addIcon } from "./icons.js";
import { deleteIcon } from "./icons.js";
import { commentIcon } from "./icons.js";
import { arrowLeftIcon } from "./icons.js";
import { trashIcon } from "./icons.js";
import { photoIcon } from "./icons.js";
import { likeIcon } from "./icons.js";
import { locationIcon } from "./icons";
import { logoutIcon } from "./icons";
import { gridIcon } from "./icons";
import { userIcon } from "./icons";
import { plusIcon } from "./icons";

export default function IconButton({ type, focused, size, inversia }) {
  let xml;
  switch (type) {
    case "add":
      xml = addIcon(focused);
      break;
    case "delete":
      xml = deleteIcon(focused);
      break;
    case "comment":
      xml = commentIcon(focused);
      break;
    case "arrowLeft":
      xml = arrowLeftIcon(focused);
      break;
    case "like":
      xml = likeIcon(focused);
      break;
    case "location":
      xml = locationIcon(focused);
      break;
    case "logout":
      xml = logoutIcon(focused);
      break;
    case "grid":
      xml = gridIcon(focused);
      break;
    case "plus":
      xml = plusIcon(focused);
      break;
    case "trash":
      xml = trashIcon(focused);
      break;
    case "user":
      xml = userIcon(focused);
      break;
    case "photo":
      xml = photoIcon(focused, inversia);
      break;
  }

  const PlusIcon = ({ focused, size, inversia }) => {
    return (
      <View style={styles.btnPlus}>
        <SvgXml xml={xml} width={size} height={size} />
      </View>
    );
  };

  return (
    <>
      <SvgXml xml={xml} width={size} height={size} />
      {(type === "plus" || type === "user") && focused && (
        <PlusIcon focused={focused} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  btnPlus: {
    backgroundColor: "#FF6C00",
    borderRadius: 20,
    width: 70,
    maxHeight: 40,
  },
});
