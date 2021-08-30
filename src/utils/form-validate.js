const initialValidate = (value) => {
  return value.replace(/\D/g, "");
};

const errors = {
  "01": "only numbers",
  "02": "invalid date",
};

const validate = (value, name) => {
  switch (name) {
    case "cart":
      const cardValue = initialValidate(value.current.value).match(
        /(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/
      );
      const oldCardValue = value.current.value;

      value.current.value = !cardValue[2]
        ? cardValue[1]
        : `${cardValue[1]}-${cardValue[2]}${`${
            cardValue[3] ? `-${cardValue[3]}` : ""
          }`}${`${cardValue[4] ? `-${cardValue[4]}` : ""}`}`;
      return {
        value: value.current.value.replace(/(\D)/g, ""),
        errorMsg:
          oldCardValue.replace(/-/g, "").slice(0, 16) !== cardValue[0]
            ? errors["01"]
            : "",
        isDone: cardValue[0].length === 16,
      };
    case "date":
      const currentDate = new Date();
      const currenYear = currentDate.getFullYear();

      const ones_number = currenYear % 10;
      const tens_number = Math.floor((currenYear % 100) / 10);

      const regrexStr = new RegExp(
        "^((0[1-9])|(1[0-2]))((" +
          tens_number +
          "[" +
          ones_number +
          "-9])|([" +
          (tens_number + 1) +
          "-9][0-9]))$"
      );
      const dateValue = initialValidate(value.current.value).match(
        /(\d{0,2})(\d{0,2})/
      );
      const oldDateValue = value.current.value;

      value.current.value = !dateValue[2]
        ? dateValue[1]
        : `${dateValue[1]}/${dateValue[2]}`;
      return {
        value: value.current.value.replace(/\//g, ""),
        errorMsg:
          oldDateValue.replace(/\//g, "").slice(0, 4) !== dateValue[0]
            ? errors["01"]
            : !regrexStr.test(dateValue[0]) && dateValue[0].length === 4
            ? errors["02"]
            : "",
        isDone: dateValue[0].length === 4,
      };
    case "cvv":
      const cvvValue = initialValidate(value.current.value).slice(0, 3);
      const oldCvvValue = value.current.value;
      value.current.value = cvvValue;
      return {
        value: value.current.value,
        errorMsg: oldCvvValue.slice(0, 3) !== cvvValue ? errors["01"] : "",
        isDone: cvvValue.length === 3,
      };
    default:
      return {
        value,
        errorMsg: "",
        isDone: false,
      };
  }
};

export default validate;
