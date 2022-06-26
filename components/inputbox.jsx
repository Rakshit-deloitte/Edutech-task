import React from "react";

const InputBox = (props) => {
  return (
    <form>
      <label className="inputBox">{props.label}</label>
      <input
        className="form-control input-form"
        type="text"
        {...props}
        placeholder={props.placeholder}
        onChange={props.handleChange}
        // value={props.value}
      />
    </form>
  );
};

export default InputBox;
