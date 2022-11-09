import React from "react";
import { View, Image } from "react-native";

import TextField from "../TextField";
import Title from "../Title";
import Button from "../Button";
import Link from "../Link";

import IconButton from "../IconButton";

import { style } from "./style";

function AuthScreen({ type, text }) {
  const register = type === "register" ? true : false;
  return (
    <View style={register ? style.formRegister : style.formLogin}>
      {register && (
        <View style={style.imageWrapper}>
          <Image />
          <View style={style.iconWrapper}>
            <IconButton type="add" />
          </View>
        </View>
      )}

      <Title text={text} />
      {register && <TextField type="inputAuth" placeholder="Логин" />}
      <TextField type="inputAuth" placeholder="Адрес электронной почты" />
      <TextField type="inputAuth" secureTextEntry={true} placeholder="Пароль" />
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
