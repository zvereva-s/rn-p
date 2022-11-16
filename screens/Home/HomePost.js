import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import IconButton from "../../shared/components/IconButton/IconButton";

export default function HomePost() {
  return (
    <View style={styles.postWrapper}>
      <Image
        source={require("../../assets/postImg.jpeg")}
        style={styles.imgPost}
      />
      <Text style={styles.titlePost}>Title</Text>
      <View style={styles.feedbacksWrapper}>
        <View style={styles.likesCommentsBox}>
          <View style={styles.likesBox}>
            <IconButton type="like" />
            <Text style={styles.feedbackTitle}>8</Text>
          </View>
          <View style={styles.commentsBox}>
            <IconButton type="comment" />
            <Text style={styles.feedbackTitle}>150</Text>
          </View>
        </View>
        <View style={styles.feedbackLocationBox}>
          <View style={styles.feedbackLocation}>
            <IconButton type="location" />
            <Text
              style={{
                ...styles.feedbackTitle,
                textAlign: "right",
                textDecorationLine: "underline",
                marginLeft: 4,
              }}
            >
              Kyiv
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  feedbacksWrapper: {
    flex: 1,
    flexDirection: "row",
    minHeight: 24,
  },
  likesCommentsBox: {
    flex: 2,
    flexDirection: "row",

    justifyContent: "start",
    minHeight: 24,
  },
  feedbackLocationBox: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "end",
    minHeight: 24,
  },
  feedbackLocation: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  likesBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    minHeight: 24,
  },
  commentsBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    minHeight: 24,
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
});
