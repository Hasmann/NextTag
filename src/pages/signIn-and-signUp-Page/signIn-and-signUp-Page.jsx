import React from "react";
import "./signIn-and-signUp-Page.style.scss";
import SignIn from "./../../Components/SignIn/signInComponents.component";
import SignUp from "./../../Components/signUpWithEmail/signUpEmail.component";
const SignInAndUpPage = () => {
  return (
    <div className="signIn-signUp">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndUpPage;
