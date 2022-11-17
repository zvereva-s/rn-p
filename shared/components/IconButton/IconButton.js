import React from "react";
import { SvgXml } from "react-native-svg";
import { StyleSheet, TouchableOpacity } from "react-native";

import { addIcon } from "./icons.js";
import { deleteIcon } from "./icons.js";
import { commentIcon } from "./icons.js";
import { commentGreyIcon } from "./icons";
import { likeIcon } from "./icons.js";
import { locationIcon } from "./icons";
import { logoutIcon } from "./icons";
import { gridIcon } from "./icons";
import { userIcon } from "./icons";
import { plusIcon } from "./icons";
import { plusFocusedIcon } from "./icons";
import { orangeBackIcon } from "./icons";

function IconButton({ type }) {
  const AddSvg = () => <SvgXml xml={addIcon} style={styles.icon} />;
  const DeleteSvg = () => <SvgXml xml={deleteIcon} style={styles.delete} />;
  const LikeSvg = () => <SvgXml xml={likeIcon} style={styles.like} />;
  const CommentSvg = () => <SvgXml xml={commentIcon} style={styles.comment} />;
  const CommentGreySvg = () => (
    <SvgXml xml={commentGreyIcon} style={styles.comment} />
  );
  const LocationSvg = () => (
    <SvgXml xml={locationIcon} style={styles.location} />
  );
  const LogoutSvg = () => <SvgXml xml={logoutIcon} style={styles.logout} />;
  const GridSvg = () => <SvgXml xml={gridIcon} style={styles.grid} />;
  const PlusSvg = () => <SvgXml xml={plusIcon} style={styles.plus} />;
  const UserSvg = () => <SvgXml xml={userIcon} style={styles.user} />;
  const PlusFocusedSvg = () => <SvgXml xml={plusFocusedIcon} />;
  const UserFocusedSvg = () => (
    <>
      <SvgXml xml={orangeBackIcon} style={styles.userFocus}>
        <SvgXml xml={userIcon} style={styles.user} />
      </SvgXml>
    </>
  );

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
    case "comment-grey":
      svg = <CommentGreySvg />;
      break;
    case "location":
      svg = <LocationSvg />;
      break;
    case "logout":
      svg = <LogoutSvg />;
      break;
    case "grid":
      svg = <GridSvg />;
      break;
    case "user":
      svg = <UserSvg />;
      break;
    case "plus":
      svg = <PlusSvg />;
      break;
    case "plus-focus":
      svg = <PlusFocusedSvg />;
      break;
    case "user-focus":
      svg = <UserFocusedSvg />;
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
  grid: {},
  user: {
    position: "relative",
    zIndex: 1,
  },
  userFocus: {
    position: "relative",
    zIndex: -10,
  },
  plus: {},
});
export default IconButton;
