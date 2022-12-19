import React, { useState, useEffect, useLayoutEffect } from "react";

import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";

import { Camera } from "expo-camera";

import useAuth from "../../shared/hooks/useAuth";
import db from "../../firebase/config";

import {
  takePhoto,
  uploadPhotoToServer,
} from "../../shared/api/api-uploadImages";

import IconButton from "../../shared/components/IconButton/IconButton";

export default function CreatePostScreen({ navigation }) {
  const { navigate } = navigation;
  const { user } = useAuth();
  const { userID, login } = user;

  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [submitFocus, setSubmitFocus] = useState(false);
  const [locationIconFocused, setLocationIconFocused] = useState(false);
  const [focusedTrash, setFocusedTrash] = useState(false);

  const [camera, setCamera] = useState("");
  const [uri, setUri] = useState("");
  const [locationCoords, setLocationCoords] = useState({
    latitude: "",
    longitude: "",
  });
  const [state, setState] = useState({
    name: "",
    locationName: "",
  });
  const { name, locationName } = state;
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{ paddingLeft: 10 }}
          activeOpacity={0.8}
          onPress={() => navigate("Публикации")}
        >
          <IconButton type="arrowLeft" focused={false} size="25" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      setDimensions(width);
    };

    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
      setState({
        name: "",
        locationName: "",
      });
      setFocusedTrash(false);
    };
  }, []);

  async function uploadPostToServer() {
    try {
      const photo = await uploadPhotoToServer(uri, "postImages");
      await db.firestore().collection("posts").add({
        photo,
        name: state.name,
        login,
        userID,
        locationName: state.locationName,
        locationCoords,
        date: Date.now(),
      });
    } catch (error) {
      console.log(
        `%c[Error - uploadPostToServer(): ${error.message}]`,
        "color: #F44336;"
      );

      throw error;
    }
  }
  function hideKeyboard() {
    setKeyboardStatus(false);
    Keyboard.dismiss();

    setState({
      name: "",
      locationName: "",
    });
  }
  function sendPost() {
    if (name.length && locationName?.length > 2) {
      setSubmitFocus(true);
    }
    uploadPostToServer();
    navigate("Публикации");
    setState({
      name: "",
      locationName: "",
    });
    setUri("");
  }

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container}>
        {uri && (
          <View style={styles.imgContainer}>
            <Image source={{ uri }} style={{ height: 240 }} />
          </View>
        )}
        <Camera style={styles.cameraContainer} ref={setCamera}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btnPhotoWrapper}
            onPress={() => {
              takePhoto(camera, setUri, setLocationCoords);
              console.log({ locationCoords });
            }}
          >
            <View style={styles.icnWrapper}>
              <IconButton type="photo" focused={false} size="24" />
            </View>
          </TouchableOpacity>
        </Camera>
        <Text style={styles.text}>
          {uri ? "Редактировать фото" : "Загрузите фото"}
        </Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={{ ...styles.form, bottom: keyboardStatus ? 30 : 0 }}>
            <TextInput
              style={styles.input}
              placeholder="Название..."
              placeholderTextColor="#BDBDBD"
              value={name}
              onChangeText={(value) => {
                setSubmitFocus(false);
                setState((prev) => ({ ...prev, name: value }));
              }}
              onFocus={() => {
                setKeyboardStatus(true);
              }}
            />
            <TextInput
              style={{
                ...styles.input,
                paddingLeft: 28,
                marginBottom: 0,
                position: "relative",
              }}
              placeholder="Местность..."
              placeholderTextColor="#BDBDBD"
              value={locationName}
              onChangeText={(value) => {
                setState((prev) => ({ ...prev, locationName: value }));
              }}
              onFocus={() => {
                setKeyboardStatus(true);
                setLocationIconFocused(true);

                name.length && locationName?.length
                  ? setSubmitFocus(true)
                  : setSubmitFocus(false);
              }}
              onBlur={() => {
                setLocationIconFocused(false);
              }}
            />
            <View style={{ position: "absolute", top: 80 }}>
              <IconButton
                type="location"
                focused={locationIconFocused}
                size="24"
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                ...styles.btn,
                backgroundColor: submitFocus ? "#FF6C00" : "#F6F6F6",
              }}
              onPress={sendPost}
            >
              <Text
                style={{
                  ...styles.btnText,
                  color: submitFocus ? "#FFF" : "#BDBDBD",
                }}
              >
                Опубликовать
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={styles.btnTrashContainer}
          activeOpacity={0.8}
          onPress={() => {
            setFocusedTrash(!focusedTrash);
            // setCamera("");
            setUri("");
            setLocationCoords({
              latitude: "",
              longitude: "",
            });
            setState({
              name: "",
              locationName: "",
            });
          }}
        >
          <View
            style={{
              ...styles.btnTrash,
              backgroundColor: focusedTrash ? "#FF6C00" : "#F6F6F6",
            }}
          >
            <IconButton type="trash" size="24" focused={focusedTrash} />
          </View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#FFF",
    height: "100%",
    paddingTop: 32,
  },
  imgContainer: {
    position: "absolute",
    top: 32,
    left: 0,
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",

    height: 240,
    width: "93%",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginHorizontal: 16,
  },
  cameraContainer: {
    position: "relative",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",

    height: 240,
    borderRadius: 8,
    marginHorizontal: 16,
  },

  btnPhotoWrapper: {
    position: "relative",

    backgroundColor: "#FFF",
    borderRadius: "50%",
    width: 60,
    height: 60,
  },
  icnWrapper: {
    position: "absolute",
    top: "30%",
    left: "30%",
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",

    marginHorizontal: 16,
    marginTop: 8,
  },
  form: {
    marginTop: 32,
    marginHorizontal: 16,
  },
  input: {
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 16,
    color: "#212121",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,

    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  btn: {
    marginTop: 32,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 16,

    backgroundColor: "#F6F6F6",
    borderRadius: 100,

    alignItems: "center",
  },
  btnText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  btnTrashContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,

    height: 85,
    alignItems: "center",
  },
  btnTrash: {
    width: 70,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
