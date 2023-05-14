import React from "react";
import "./buttonComponents.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProperties
}) => {
  return (
    <div>
      <button
        className={`${inverted ? "inverted" : ""}  ${
          isGoogleSignIn ? "google-sign-in" : ""
        } custom-button`}
        {...otherProperties}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
