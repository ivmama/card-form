import "./form-box.scss";
import { useRef } from "react";
const FormBox = ({ data, onValueChange }) => {
  const { placeHolder, label, name, errorMsg } = data;
  const inputValue = useRef();
  return (
    <div className="form-box">
      <label className="form-box__label" htmlFor={name}>
        {label}
      </label>
      <div className="form-box__input-wrapper">
        <input
          className={"form-box__input" + (errorMsg ? " isError" : "")}
          name={name}
          ref={inputValue}
          type="text"
          onChange={(e) => {
            onValueChange(inputValue, name);
          }}
          placeholder={placeHolder}
        ></input>
        {errorMsg && (
          <label className="form-box__label-error">{errorMsg}</label>
        )}
      </div>
    </div>
  );
};

export default FormBox;
