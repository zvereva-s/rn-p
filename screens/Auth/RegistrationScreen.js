import React, { useState, useEffect } from "react";
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
} from "react-native";

import IconButton from "../../shared/components/IconButton/IconButton";

export default function RegistrationScreen({ navigation }) {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loginIsActiveStyle, setLoginIsActiveStyle] = useState({});
  const [emailIsActiveStyle, setEmailIsActiveStyle] = useState({});
  const [passwordIsActiveStyle, setPasswordIsActiveStyle] = useState({});

  const [state, setState] = useState({
    login: "",
    email: "",
    password: "",
  });
  const { login, email, password } = state;

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
      login: "",
      email: "",
      password: "",
    });
  }

  return (
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
                <Image />
                <View style={styles.iconWrapper}>
                  <IconButton type="add" />
                </View>
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
                  onPress={hideKeyboard}
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
});
