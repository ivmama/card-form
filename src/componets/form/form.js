import "./form.scss";
import { useState } from "react";
import FormBox from "../form-box";
import validate from "../../utils/form-validate.js";

const initialData = () => {
  return {
    cart: {
      name: "cart",
      placeHolder: "**** **** **** ****",
      label: "Your cart",
      value: "",
      errorMsg: "",
      isDone: false,
    },
    date: {
      name: "date",
      placeHolder: "MM/YY",
      label: "MM/YY",
      value: "",
      errorMsg: "",
      isDone: false,
    },
    cvv: {
      name: "cvv",
      placeHolder: "***",
      label: "Your cvv",
      value: "",
      errorMsg: "",
      isDone: false,
    },
  };
};

const Form = () => {
  const [formData, setFormData] = useState(initialData());
  const [disabled, onDisabled] = useState(true);

  const onFieldChange = (inputCard, name) => {
    const { value, errorMsg, isDone } = validate(inputCard, name);

    const newFormData = {
      ...formData,
      [name]: {
        ...formData[name],
        value,
        errorMsg,
        isDone: isDone && !errorMsg,
      },
    };

    setFormData(newFormData);
    onDisabled(!onCheckDisabled(newFormData));
  };

  const onCheckDisabled = (formValues) => {
    return Object.values(formValues).every((value) => value.isDone);
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setFormData(initialData());
        e.target.reset();
      }}
    >
      <div className="form__text"> Some text</div>
      <FormBox data={formData.cart} onValueChange={onFieldChange} />
      <div className="form__block">
        <FormBox data={formData.date} onValueChange={onFieldChange} />
        <FormBox data={formData.cvv} onValueChange={onFieldChange} />
      </div>
      <button type="submit" disabled={disabled} className="form__btn">
        Pay
      </button>
    </form>
  );
};

export default Form;
