import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  formRegister: {
    position: "relative",
    alignItems: "center",

    height: 549,
    backgroundColor: "#fff",

    borderRadius: 25,
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
  },
  formLogin: {
    position: "relative",
    alignItems: "center",

    height: 489,
    backgroundColor: "#fff",

    borderRadius: 25,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  linkWrapperShowRegister: {
    position: "absolute",
    bottom: 245,
    right: 32,
  },
  linkWrapperShowLogin: {
    position: "absolute",
    bottom: 301,
    right: 32,
  },
  imageWrapper: {
    position: "absolute",
    top: -60,

    backgroundColor: "#F6F6F6",
    borderRadius: 16,

    width: 120,
    height: 120,

    marginBottom: 32,
  },
  iconWrapper: {
    position: "absolute",
    right: -10,
    bottom: 15,
  },
  linkWrapperPath: {
    marginTop: 16,
  },
});
