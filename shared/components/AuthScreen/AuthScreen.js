import React, { useState } from "react";
import { View, Image } from "react-native";

import TextField from "../TextField";
import Title from "../Title";
import Button from "../Button";
import Link from "../Link";
import IconButton from "../IconButton";

import { handlerStyleForm } from "../../utils/utils";

import { style } from "./style";

function AuthScreen({ type, text }) {
  const { formLogin, formRegister } = style;
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const register = type === "register" ? true : false;

  const formStyle = handlerStyleForm(
    type,
    isShowKeyboard,
    formRegister,
    formLogin
  );
  function handleFocus() {
    setIsShowKeyboard(true);
  }
  function handleBlur() {
    setIsShowKeyboard(false);
  }

  return (
    <View style={formStyle}>
      {register && (
        <View style={style.imageWrapper}>
          <Image />
          <View style={style.iconWrapper}>
            <IconButton type="add" />
          </View>
        </View>
      )}

      <Title text={text} />
      {register && (
        <TextField
          type="inputAuth"
          placeholder="Логин"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}
      <TextField
        type="inputAuth"
        placeholder="Адрес электронной почты"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <TextField
        type="inputAuth"
        secureTextEntry={true}
        placeholder="Пароль"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <View
        style={
          register ? style.linkWrapperShowRegister : style.linkWrapperShowLogin
        }
      >
        <Link text="Показать" />
      </View>

      {register && <Button text="Зарегистрироваться" />}
      {!register && <Button text="Войти" />}
      <View style={style.linkWrapperPath}>
        {register && <Link text="Уже есть аккаунт? Войти" />}
        {!register && <Link text="Нет аккаунта? Зарегистрироваться" />}
      </View>
    </View>
  );
}

export default AuthScreen;
