import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import db from "../../firebase/config";

import useAuth from "../../shared/hooks/useAuth";
import { handleDate } from "../../shared/utils/utils";

import IconButton from "../../shared/components/IconButton/IconButton";

export default function CommentsScreen({ route }) {
  const auth = useAuth();

  const { login } = auth.user;
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [date, setDate] = useState(handleDate());

  const { photo: uri, id } = route?.params;

  useEffect(() => {
    async function fetchPostComments() {
      try {
        await db
          .firestore()
          .collection("posts")
          .doc(id)
          .collection("comments")
          .onSnapshot(({ docs }) => {
            setComments(
              docs
                .map((doc) => ({
                  ...doc.data(),
                  id: doc.id,
                }))
                .sort(
                  (firstPost, lastPost) => lastPost.dateID - firstPost.dateID
                )
            );
          });
      } catch (error) {
        console.log(
          `%c[Error - fetchPostComments(): ${error.message}]`,
          "color: #F44336;"
        );

        throw error;
      }
    }
    fetchPostComments();
  }, []);

  async function handleComment() {
    try {
      await db
        .firestore()
        .collection("posts")
        .doc(id)
        .collection("comments")
        .add({ comment, login, date, dateID: Date.now() });
      setComment("");
    } catch (error) {
      console.log(
        `%c[Error - handleComment(): ${error.message}]`,
        "color: #F44336;"
      );

      throw error;
    }
  }

  const MsgComment = ({ photo, login, comment, date, modulo }) => (
    <View
      style={
        !modulo
          ? styles.msgWrapper
          : { ...styles.msgWrapper, flexDirection: "row-reverse" }
      }
    >
      <Image
        style={styles.avatar}
        source={require("../../assets/userAvatar.png")}
      />
      <View
        style={
          !modulo
            ? styles.txtWrapper
            : {
                ...styles.txtWrapper,
                borderTopRightRadius: 0,
                borderTopLeftRadius: 6,
              }
        }
      >
        <Text style={styles.text}>{comment}</Text>
        <Text
          style={
            !modulo
              ? styles.timeDelivery
              : { ...styles.timeDelivery, textAlign: "left" }
          }
        >
          {date}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image style={styles.imgPost} source={{ uri }} />
      <FlatList
        data={comments}
        keyExtractor={({ id }) => id}
        renderItem={({ item, index }) => {
          const modulo = index % 2 ? true : false;
          return (
            <MsgComment
              // photo={comment.photo}
              login={item.login}
              comment={item.comment}
              date={item.date}
              modulo={modulo}
            />
          );
        }}
      />
      <View style={styles.input}>
        <TextInput
          style={styles.txtInput}
          placeholder="Комментировать..."
          placeholderTextColor="#BDBDBD"
          value={comment}
          onChangeText={setComment}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btnComment}
          onPress={handleComment}
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
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxHeight: 50,

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
    backgroundColor: "#F6F6F6",

    paddingLeft: 16,
    paddingRight: 8,
    marginBottom: 16,
  },
  txtInput: {
    fontFamily: "Roboto",
    fontSize: 13,
    fontStyle: "normal",
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
