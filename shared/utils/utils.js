export const handleStyleForm = (type, isShowKeyboard, register, login) => {
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
export const validateField = (type, value, name) => {
  let res = {};

  switch (type) {
    case "text":
      if (value.length < 2) {
        res = {
          message: "Min length must be more 2",
          type: "text",
          name: "name",
        };
      }
      break;
    case "email":
      const validEmail = value.match(
        /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
      );
      if (!validEmail) {
        res = {
          message: "Email doesn't match of example like mail@mail.com",
          type: "email",
          name: "email",
        };
      }
      break;
    case "password":
      // const validPassword = value.match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/);
      // if (!validPassword) {
      //   setError({
      //     message:
      //       "Password have to include special symbols and to be min 6 and max 16",
      //     type: "password",
      //   });
      // }
      break;
    case "number":
      // eslint-disable-next-line default-case
      switch (name) {
        case "height":
          //
          console.log({ value });

          //
          if (value.Number() < 120) {
            res = {
              message: "Height must be more 120 cm",
              type: "text",
              name: "height",
            };
          }
          break;
        case "weight":
          if (value.Number() < 30) {
            res = {
              message: "Weight must be more 30 kg",
              type: "text",
              name: "weight",
            };
          }
          break;
        case "age":
          if (value.Number() < 18) {
            res = {
              message: "Age must be more 18 y",
              type: "text",
              name: "age",
            };
          }
          break;
      }
    // eslint-disable-next-line no-fallthrough
    default:
      res = {
        message: "",
        type: "",
        name: "",
      };
  }
  return res;
};
