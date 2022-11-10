export const handlerStyleForm = (type, isShowKeyboard, register, login) => {
  let formStyle;
  switch (type) {
    case "register":
      formStyle = !isShowKeyboard ? register : { ...register, bottom: -160 };
      break;
    case "login":
      formStyle = !isShowKeyboard ? login : { ...login, bottom: -220 };
      break;
  }

  return formStyle;
};
