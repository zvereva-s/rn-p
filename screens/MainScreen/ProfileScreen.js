import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { authSignOut } from "../../redux/auth/auth-operations";
import useAuth from "../../shared/hooks/useAuth";

import { getUserPosts } from "../../shared/api/api-posts";

import IconButton from "../../shared/components/IconButton/IconButton";

export default function ProfileScreen({ navigation }) {
  const dispatch = useDispatch();
  const { navigate } = navigation;
  const { user } = useAuth();
  const { userID } = user;

  const [userPosts, setUserPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getUserPosts(comments, setComments, setUserPosts, userID);

    return () => {
      setComments([]);
      setUserPosts([]);
    };
  }, []);

  const Post = ({
    id,
    photo,
    name,
    locationName,
    locationCoords,
    commentNumber,
  }) => {
    const { latitude, longitude } = locationCoords;

    return (
      <View style={styles.postWrapper}>
        <Image source={{ uri: photo }} style={styles.imgPost} />
        <Text style={styles.titlePost}>{name}</Text>
        <View style={styles.feedbacksWrapper}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.commentsBox}
            onPress={() => navigate("Комментарии", { photo, id })}
          >
            <IconButton type="comment" focused={true} size="25" />
            <Text style={styles.feedbackTitle}>{commentNumber}</Text>
          </TouchableOpacity>
          <View style={styles.likesCommentsBox}>
            <View style={styles.likesBox}>
              <IconButton type="like" focused={true} size="25" />
              <Text style={styles.feedbackTitle}>8</Text>
            </View>
          </View>
          <View style={styles.feedbackLocationBox}>
            <TouchableOpacity
              style={styles.feedbackLocation}
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate("Карта", {
                  latitude,
                  longitude,
                  locationName,
                })
              }
            >
              <IconButton type="location" focused={false} size="25" />
              <Text
                style={{
                  ...styles.feedbackTitle,
                  textAlign: "right",
                  textDecorationLine: "underline",
                  marginLeft: 4,
                }}
              >
                {locationName}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

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
          <Text style={styles.headerText}>{user.login}</Text>

          <FlatList
            data={userPosts}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <Post
                id={item.id}
                photo={item.photo}
                name={item.name}
                locationName={item.locationName}
                locationCoords={item.locationCoords}
                commentNumber={item.commentNumber}
              />
            )}
          />
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
    marginBottom: 32,
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
