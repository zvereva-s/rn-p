import React from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";

import { authSignOut } from "../../redux/auth/auth-operations";

import IconButton from "../../shared/components/IconButton/IconButton";

export default function ProfileScreen({ navigation }) {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backGround}
        source={require("../../assets/photo_bg.png")}
      >
        <View style={styles.wrapper}>
          <View style={styles.imageWrapper}>
            <Image
              source={require("../../assets/userAvatar.png")}
              style={styles.img}
            />
            <View style={styles.iconWrapper}>
              <IconButton type="delete" focused={false} size="35" />
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              dispatch(authSignOut());
            }}
            style={{ ...styles.iconWrapper, right: 10, top: 21 }}
          >
            <IconButton type="logout" focused={false} size="25" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Jerry Hell</Text>
          <View style={styles.postWrapper}>
            <Image
              source={require("../../assets/postImg.jpeg")}
              style={styles.imgPost}
            />
            <Text style={styles.titlePost}>Title</Text>
            <View style={styles.feedbacksWrapper}>
              <View style={styles.likesCommentsBox}>
                <View style={styles.likesBox}>
                  <IconButton type="like" focused={true} size="25" />
                  <Text style={styles.feedbackTitle}>8</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.commentsBox}
                  onPress={() => navigation.navigate("Комментарии")}
                >
                  <IconButton type="comment" focused={true} size="25" />
                  <Text style={styles.feedbackTitle}>150</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.feedbackLocationBox}>
                <View style={styles.feedbackLocation}>
                  <IconButton type="location" focused={false} size="25" />
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
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  backGround: {
    flex: 1,

    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  wrapper: {
    position: "relative",
    alignItems: "center",
    justifyContent: "flex-end",
    bottom: -10,

    backgroundColor: "#fff",

    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    width: "100%",

    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 50,
  },
  img: {
    display: "block",

    borderRadius: 16,
    height: 120,
    width: 120,
  },
  imageWrapper: {
    position: "absolute",
    top: -60,

    borderRadius: 16,

    width: 120,
    height: 120,
  },
  iconWrapper: { position: "absolute", right: -15, bottom: 15 },
  headerText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 30,

    lineHeight: 35,
    letterSpacing: 0.02,

    color: "#212121",

    marginBottom: 32,
    marginTop: 52,
  },
  postWrapper: {
    width: "100%",
    marginHorizontal: 16,
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
