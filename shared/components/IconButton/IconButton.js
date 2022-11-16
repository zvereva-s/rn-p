import React from "react";
import { SvgXml } from "react-native-svg";
import { StyleSheet, TouchableOpacity } from "react-native";

import { addIcon } from "./icons.js";
import { deleteIcon } from "./icons.js";
import { commentIcon } from "./icons.js";
import { likeIcon } from "./icons.js";
import { locationIcon } from "./icons";
import { logoutIcon } from "./icons";

function IconButton({ type }) {
  const AddSvg = () => <SvgXml xml={addIcon} style={styles.icon} />;
  const DeleteSvg = () => <SvgXml xml={deleteIcon} style={styles.delete} />;
  const LikeSvg = () => <SvgXml xml={likeIcon} style={styles.like} />;
  const CommentSvg = () => <SvgXml xml={commentIcon} style={styles.comment} />;
  const LocationSvg = () => (
    <SvgXml xml={locationIcon} style={styles.location} />
  );
  const LogoutSvg = () => <SvgXml xml={logoutIcon} style={styles.logout} />;

  let svg;
  switch (type) {
    case "add":
      svg = <AddSvg />;
      break;
    case "delete":
      svg = <DeleteSvg />;
      break;
    case "like":
      svg = <LikeSvg />;
      break;
    case "comment":
      svg = <CommentSvg />;
      break;
    case "location":
      svg = <LocationSvg />;
      break;
    case "logout":
      svg = <LogoutSvg />;
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
  delete: {
    width: 25,
    height: 25,

    transform: [{ rotate: "-45deg" }],
  },
  like: {},
  comment: {},
  location: {
    justifyContent: "end",
  },
});
export default IconButton;
