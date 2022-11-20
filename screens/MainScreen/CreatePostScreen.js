import React, { useState, useEffect } from "react";
import {
  StyleSheet,
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

import IconButton from "../../shared/components/IconButton/IconButton";

export default function CreatePostScreen() {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [submitFocus, setSubmitFocus] = useState(false);
  const [locationFocused, setLocationFocused] = useState(false);

  const [state, setState] = useState({
    name: "",
    location: "",
  });
  const { name, location } = state;

  const [dimensions, setdimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      setdimensions(width);
    };

    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  function hideKeyboard() {
    setKeyboardStatus(false);

    Keyboard.dismiss();
    console.log({ state });
    setState({
      name: "",
      location: "",
    });
  }

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <TouchableOpacity activeOpacity={0.8} style={styles.btnPhotoWrapper}>
            <View style={styles.icnWrapper}>
              <IconButton type="photo" focused={false} size="24" />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>
          {"Загрузите фото" || "Редактировать фото"}
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
              value={location}
              onChangeText={(value) => {
                setSubmitFocus(false);
                setState((prev) => ({ ...prev, location: value }));
              }}
              onFocus={() => {
                setKeyboardStatus(true);
                setLocationFocused(true);
              }}
              onBlur={() => {
                setLocationFocused(false);
              }}
            />
            <View style={{ position: "absolute", top: 80 }}>
              <IconButton type="location" focused={locationFocused} size="24" />
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                ...styles.btn,
                backgroundColor: submitFocus ? "#FF6C00" : "#F6F6F6",
              }}
              onPress={() => {
                if (name.length && location.length > 2) {
                  setSubmitFocus(true);
                }
              }}
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
    justifyContent: "center",
    alignItems: "center",

    height: 240,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
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
});

/*

backgroundColor: press ? "#FF6C00" : "#F6F6F6",

*/