import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { nanoid } from "nanoid";

import IconButton from "../../shared/components/IconButton/IconButton";
import useAuth from "../../shared/hooks/useAuth";

export default function Home({ route, navigation }) {
  const { user } = useAuth();
  const { navigate } = navigation;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [
        { id: nanoid(), ...route.params },
        ...prevState,
      ]);
    }
  }, [route.params]);

  const Item = ({ uri, name, locationName, latitude, longitude }) => {
    return (
      <View style={styles.postWrapper}>
        <Image source={{ uri }} style={styles.imgPost} />
        <Text style={styles.titlePost}>{name}</Text>
        <View style={styles.feedbackWrapper}>
          <TouchableOpacity
            style={styles.commentsBox}
            activeOpacity={0.8}
            onPress={() => navigate("Комментарии", { uri })}
          >
            <IconButton type="comment" focused={false} size="25" />
            <Text style={{ ...styles.feedbackTitle, color: "#BDBDBD" }}>
              150
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.feedbackLocation}
            activeOpacity={0.8}
            onPress={() =>
              navigate("Карта", { latitude, longitude, locationName })
            }
          >
            <IconButton type="location" focused={false} size="25" />
            <Text
              style={{
                ...styles.feedbackTitle,
                textDecorationLine: "underline",
                marginLeft: 4,
              }}
            >
              {locationName}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.avatarWrapper}>
          <Image
            style={styles.avatar}
            source={require("../../assets/userAvatar.png")}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.name}>{user.login}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
        <View style={styles.postsWrapper}>
          <FlatList
            data={posts}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <Item
                uri={item.uri}
                name={item.name}
                locationName={item.locationName}
                latitude={item.latitude}
                longitude={item.longitude}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",

    width: "100%",
    backgroundColor: "#FFF",

    paddingHorizontal: 16,
    paddingTop: 32,
  },

  avatarWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    minHeight: 60,
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
    paddingTop: 32,
  },
  postWrapper: {
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
