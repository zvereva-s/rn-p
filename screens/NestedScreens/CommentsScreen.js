import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import IconButton from "../../shared/components/IconButton/IconButton";

export default function CommentsScreen({ route }) {
  const uri = route?.params?.uri;
  return (
    <View style={styles.container}>
      <Image style={styles.imgPost} source={uri} />
      <View style={styles.msgWrapper}>
        <Image
          style={styles.avatar}
          source={require("../../assets/userAvatar.png")}
        />
        <View style={styles.txtWrapper}>
          <Text style={styles.text}>
            Really love your most recent photo. I've been trying to capture the
            same thing for a few months and would love some tips!
          </Text>
          <Text style={styles.timeDelivery}>09 июня, 2020 | 08:40</Text>
        </View>
      </View>

      <View style={{ ...styles.msgWrapper, flexDirection: "row-reverse" }}>
        <Image
          style={styles.avatar}
          source={require("../../assets/userAvatar.png")}
        />
        <View
          style={{
            ...styles.txtWrapper,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 6,
          }}
        >
          <Text style={styles.text}>
            Really love your most recent photo. I've been trying to capture the
            same thing for a few months and would love some tips!
          </Text>
          <Text style={{ ...styles.timeDelivery, textAlign: "left" }}>
            09 июня, 2020 | 08:40
          </Text>
        </View>
      </View>

      <View style={styles.input}>
        <TextInput
          style={styles.txtInput}
          placeholder="Комментировать..."
          placeholderTextColor="#BDBDBD"
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btnComment}
          // onPress={handleComment}
        >
          <IconButton type="arrowUp" focused={false} size="10" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",

    width: "100%",
    backgroundColor: "#FFF",

    paddingHorizontal: 16,
    paddingTop: 32,
  },

  imgPost: {
    display: "block",

    height: 240,
    width: 355,

    marginHorizontal: 0,
    marginBottom: 32,

    borderRadius: 8,
  },
  msgWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",

    width: "100%",
    marginBottom: 24,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 50,
    marginRight: 16,
  },
  txtWrapper: {
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03)",

    width: 300,
    borderRadius: 6,
    borderTopLeftRadius: 0,
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  timeDelivery: {
    marginTop: 8,

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 12,
    textAlign: "right",
    color: "#BDBDBD",
  },
  input: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 50,

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
  },
  txtInput: {
    // paddingTop: 16,
    // paddingBottom: 16,
    paddingLeft: 16,
  },

  btnComment: {
    alignItems: "center",
    justifyContent: "center",
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: "#FF6C00",
    padding: 0,
    margin: 0,
  },
});
