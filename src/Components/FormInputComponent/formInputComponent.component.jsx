import React from "react";

import "./formInputComponent.style.scss";

const FormInput = ({ onTypeInputChange, label, ...otherProperties }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={onTypeInputChange}
        {...otherProperties}
      />
      {label ? (
        <label
          className={`${
            otherProperties.value.length ? "shrink" : ""
          }form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
