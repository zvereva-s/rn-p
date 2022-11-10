import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  formRegister: {
    position: "relative",
    bottom: 0,

    alignItems: "center",

    backgroundColor: "#fff",

    borderRadius: 25,
    paddingTop: 92,
    paddingBottom: 66,
    paddingLeft: 16,
    paddingRight: 16,
  },
  formLogin: {
    position: "relative",
    alignItems: "center",
    bottom: 0,

    backgroundColor: "#fff",

    borderRadius: 25,
    paddingTop: 32,
    paddingBottom: 130,
    paddingLeft: 16,
    paddingRight: 16,
  },
  linkWrapperShowRegister: {
    position: "absolute",
    bottom: 203,
    right: 32,
  },
  linkWrapperShowLogin: {
    position: "absolute",
    bottom: 268,
    right: 32,
  },
  imageWrapper: {
    position: "absolute",
    top: -60,

    backgroundColor: "#F6F6F6",
    borderRadius: 16,

    width: 120,
    height: 120,
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
