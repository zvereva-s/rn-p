import { createAsyncThunk } from "@reduxjs/toolkit";

export const createOperation = (name, request, condition) => {
  return createAsyncThunk(
    name,
    async (data, { rejectWithValue }) => {
      try {
        const response = await request(data);
        return response;
      } catch (error) {
        console.log("error", error);
        console.log("error.message", error.message);
        return rejectWithValue(error);
        // throw error;
      }
    },
    { condition }
  );
};

//?  -->  dateArr utils

export function handleDate() {
  const time = new Date().toLocaleTimeString().slice(0, 5);

  const dateArr = new Date().toLocaleDateString().split(".");

  switch (dateArr[1]) {
    case "01":
      dateArr[1] = "января,";
      break;
    case "02":
      dateArr[1] = "февраля,";
      break;
    case "03":
      dateArr[1] = "марта,";
      break;
    case "04":
      dateArr[1] = "апреля,";
      break;
    case "05":
      dateArr[1] = "мая,";
      break;
    case "06":
      dateArr[1] = "июня,";
      break;
    case "07":
      dateArr[1] = "июля,";
      break;
    case "08":
      dateArr[1] = "августа,";
      break;
    case "09":
      dateArr[1] = "сентября,";
      break;
    case "10":
      dateArr[1] = "октября,";
      break;
    case "11":
      dateArr[1] = "ноября,";
      break;
    case "12":
      dateArr[1] = "декабря,";
      break;
  }

  const dateString = dateArr.join(" ");
  return `${dateString} | ${time}`;
}

// = = = = = = = = = = = = = = = = = = //
//?  -->  Validation
export const validateArrField = (type, value, name) => {
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
