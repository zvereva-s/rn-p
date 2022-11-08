import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/leaves.png")}
      >
        <View style={styles[`textWrapper`]}>
          <Text style={styles.text}>wish you well ... in hell👺</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  textWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: "20",
  },
});
