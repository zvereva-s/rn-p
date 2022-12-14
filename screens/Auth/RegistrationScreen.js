import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  Dimensions,
  Alert,
} from "react-native";
import { Camera, CameraType } from "expo-camera";

import * as ImagePicker from "expo-image-picker";

import { authSignUp } from "../../redux/auth/auth-operations";
import {
  takePhoto,
  uploadPhotoToServer,
} from "../../shared/api/api-uploadImages";

import IconButton from "../../shared/components/IconButton/IconButton";

export default function RegistrationScreen({ navigation }) {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loginIsActiveStyle, setLoginIsActiveStyle] = useState({});
  const [emailIsActiveStyle, setEmailIsActiveStyle] = useState({});
  const [passwordIsActiveStyle, setPasswordIsActiveStyle] = useState({});

  const [makePhoto, setMakePhoto] = useState(false);
  const [type, setType] = useState(CameraType.back);
  const [camera, setCamera] = useState("");
  const [photo, setPhoto] = useState("");
  const [uri, setUri] = useState("");

  const [state, setState] = useState({
    login: "",
    email: "",
    password: "",
    userPhoto: "",
  });
  const { login, email, password, userPhoto } = state;

  const dispatch = useDispatch();

  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  function chooseThePicture() {
    Alert.alert("Your picture", "", [
      {
        text: "Gallery",
        onPress: () => pickImage(),
      },
      {
        text: "Camera",
        onPress: () => setMakePhoto(true),
      },
      {
        text: "Cancel",
        onPress: () => setUri(""),
      },
    ]);
  }

  async function pickImage() {
    try {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      setUri(response.uri);
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }

  function hideKeyboard() {
    setKeyboardStatus(false);
    Keyboard.dismiss();
  }

  async function handleSubmit() {
    hideKeyboard();
    const photo = await uploadPhotoToServer(uri, "userPhoto");
    //! cl
    console.log({ photo });
    //!

    //!
    console.log({ state });
    //!
    // dispatch(authSignUp(state));
    setState({
      login: "",
      email: "",
      password: "",
    });
    setUri("");
  }

  return (
    <>
      {!makePhoto && (
        <TouchableWithoutFeedback onPress={hideKeyboard}>
          <View style={styles.container}>
            <ImageBackground
              style={styles.backGround}
              source={require("../../assets/photo_bg.png")}
            >
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <View
                  style={{
                    ...styles.form,
                    bottom: keyboardStatus ? -230 : 0,
                  }}
                >
                  <View style={styles.imageWrapper}>
                    {uri && <Image style={styles.avatar} source={{ uri }} />}
                    {!uri && (
                      <Image
                        style={styles.avatar}
                        source={require("../../assets/userAvatar.png")}
                      />
                    )}

                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.iconWrapper}
                      onPress={() => chooseThePicture()}
                    >
                      <IconButton
                        type={uri ? "delete" : "add"}
                        focused={false}
                        size={uri ? "40" : "25"}
                      />
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.headerText}>Регистрация</Text>
                  <View
                    style={{
                      width: dimensions,
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <TextInput
                      style={{ ...styles.input, ...loginIsActiveStyle }}
                      placeholder="Логин"
                      selectionColor="orange"
                      activeUnderlineColor="orange"
                      value={login}
                      onFocus={() => {
                        setLoginIsActiveStyle(styles.isFocused);
                        setKeyboardStatus(true);
                      }}
                      onBlur={() => setLoginIsActiveStyle({})}
                      onChangeText={(value) => {
                        setState((prev) => ({ ...prev, login: value }));
                      }}
                    />
                    <TextInput
                      style={{
                        ...styles.input,
                        ...emailIsActiveStyle,
                      }}
                      placeholder="Адрес электронной почты"
                      keyboardType="email - address"
                      value={email}
                      onFocus={() => {
                        setEmailIsActiveStyle(styles.isFocused);
                        setKeyboardStatus(true);
                      }}
                      onBlur={() => setEmailIsActiveStyle({})}
                      onChangeText={(value) => {
                        setState((prev) => ({ ...prev, email: value }));
                      }}
                    />
                    <TextInput
                      style={{
                        ...styles.input,
                        ...passwordIsActiveStyle,
                      }}
                      placeholder="Пароль"
                      secureTextEntry={secureTextEntry}
                      value={password}
                      onFocus={() => {
                        setPasswordIsActiveStyle(styles.isFocused);
                        setKeyboardStatus(true);
                      }}
                      onBlur={() => {
                        setPasswordIsActiveStyle({});
                        setKeyboardStatus(!keyboardStatus);
                      }}
                      onChangeText={(value) => {
                        setState((prev) => ({ ...prev, password: value }));
                      }}
                    />
                    <Text
                      onPress={() => setSecureTextEntry(!secureTextEntry)}
                      style={styles.linkShow}
                    >
                      Показать
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.btn}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.btnTitle}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                    <Text
                      style={styles.linkPath}
                      onPress={() => {
                        navigation.navigate("Login");
                      }}
                    >
                      Уже есть аккаунт? Войти
                    </Text>
                  </View>
                </View>
              </KeyboardAvoidingView>
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      )}
      {makePhoto && (
        <View style={styles.containerMakePhoto}>
          <Camera style={styles.cameraContainer} ref={setCamera}>
            <TouchableOpacity
              style={styles.btnChangeType}
              stylactiveOpacity={0.8}
              onPress={() => toggleCameraType}
            >
              <Text style={styles.btnTitle}>Change Camera Type</Text>
            </TouchableOpacity>
            <TouchableOpacity
              stylactiveOpacity={0.8}
              onPress={() => takePhoto(camera, setPhoto)}
            >
              <IconButton type="photo" focused={false} size="50" />
            </TouchableOpacity>
          </Camera>
          {photo && (
            <TouchableOpacity
              style={styles.btnWrapperMakePhoto}
              stylactiveOpacity={0.8}
              onPress={() => {
                setUri(photo);
                setMakePhoto(false);
              }}
            >
              <Text style={styles.btnTitle}>Add photo</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </>
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
  imageWrapper: {
    position: "absolute",
    top: -60,

    backgroundColor: "#F6F6F6",
    borderRadius: 16,

    width: 120,
    height: 120,
  },
  avatar: {
    borderRadius: 16,
    width: 120,
    height: 120,
  },

  iconWrapper: { position: "absolute", right: -15, bottom: 15 },

  form: {
    position: "relative",
    alignItems: "center",
    bottom: 0,

    backgroundColor: "#fff",

    borderRadius: 25,
    paddingTop: 32,
    paddingBottom: 130,
    paddingLeft: 16,
    paddingRight: 16,
  },
  headerText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 30,

    lineHeight: 35,
    letterSpacing: 0.02,

    color: "#212121",

    marginBottom: 16,
    marginTop: 42,
  },
  input: {
    position: "relative",

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 8,

    backgroundColor: "#F6F6F6",

    marginTop: 16,

    paddingLeft: 16,

    height: 40,
    width: "100%",
  },
  isFocused: {
    backgroundColor: "#FFF",
    borderColor: "#FF6C00",
  },

  linkShow: {
    position: "absolute",
    bottom: 137,
    right: 32,

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  btn: {
    marginTop: 40,
    marginHorizontal: 16,
    width: "100%",

    padding: 16,

    backgroundColor: "#FF6C00",
    borderRadius: 100,

    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: "19",

    color: "#FFF",
  },
  linkPath: {
    marginTop: 16,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },

  containerMakePhoto: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  cameraContainer: {
    flex: 10,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  btnChangeType: {
    position: "absolute",
    bottom: 100,
    opacity: 0.5,
  },
  btnWrapperMakePhoto: {
    position: "absolute",
    bottom: 40,
    right: 16,
    left: 16,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",

    padding: 16,

    backgroundColor: "#FF6C00",

    btnWrapper: 1,
    borderRadius: 100,
  },
});
