import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import IconButton from "../../shared/components/IconButton/IconButton";

export default function PostsScreen() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.avatarWrapper}>
          <Image
            style={styles.avatar}
            source={require("../../assets/userAvatar.png")}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.name}>Jerry Hell</Text>
            <Text style={styles.email}>jerry@mail.com</Text>
          </View>
        </View>
        <View style={styles.postsWrapper}>
          <View style={styles.postWrapper}>
            <Image
              source={require("../../assets/postImg.jpeg")}
              style={styles.imgPost}
            />
            <Text style={styles.titlePost}>The Carpathians</Text>
            <View style={styles.feedbackWrapper}>
              <View style={styles.commentsBox}>
                <IconButton type="comment-grey" />
                <Text style={{ ...styles.feedbackTitle, color: "#BDBDBD" }}>
                  150
                </Text>
              </View>

              <View style={styles.feedbackLocation}>
                <IconButton type="location" />
                <Text
                  style={{
                    ...styles.feedbackTitle,
                    textDecorationLine: "underline",
                    marginLeft: 4,
                  }}
                >
                  Ivano-Frankivs'k Region, Ukraine
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",

    width: "100%",
    backgroundColor: "#FFF",

    paddingHorizontal: 16,
    paddingTop: 32,
  },

  avatarWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    maxHeight: 60,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },

  name: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
    margin: 0,
    padding: 0,
  },
  email: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
    margin: 0,
    padding: 0,
  },

  postsWrapper: {
    width: "100%",
    marginTop: 32,
  },
  imgPost: {
    display: "block",

    height: 240,
    width: 355,

    marginHorizontal: 0,
    marginBottom: 8,

    borderRadius: 8,
  },
  titlePost: {
    marginBottom: 8,

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  feedbackTitle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginLeft: 6,
  },
  feedbackWrapper: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-start",

    width: "100%",
    minHeight: 24,
  },
  commentsBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  feedbackLocation: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
