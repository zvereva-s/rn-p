import { useState } from "react";
import { validateField } from "../utils/utils";

const useForm = (onSubmit, initialState) => {
  const [state, setState] = useState({ ...initialState });
  const [error, setError] = useState({
    message: "",
    type: "",
    name: "",
  });

  const validate = ({ target }) => {
    const { type, value, name } = target;
    const obj = validateField(type, value, name);
    setError(obj);
  };

  const handleChange = ({ target }) => {
    const { nativeEvent } = target;
    const { name, text } = nativeEvent;
    //
    console.log("text", { text });
    //
    setState((prevState) => ({
      ...prevState,
      // [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit({ ...state });
    reset();
  };
  const reset = () => {
    setState({
      ...initialState,
    });
  };

  return {
    state,
    setState,
    handleChange,
    handleSubmit,
    reset,
    error,
    validate,
  };
};

export default useForm;
