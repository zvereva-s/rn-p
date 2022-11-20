import React from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";

import IconButton from "../shared/components/IconButton/IconButton";

export default function CreatePostScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Image />
        <Text />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
});
