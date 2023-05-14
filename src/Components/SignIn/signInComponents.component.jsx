import React from "react";

import "./signInComponent.style.scss";

import FormInput from "./../FormInputComponent/formInputComponent.component";
import CustomButton from "./../Button/buttonComponents.component";
import { auth, signInWithGoogle } from "./../../Firebase/firebase.utils";
class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  OnSubmitButton = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({ email: "", password: "" });
    } catch (err) {
      console.log(err);
    }
  };
  onTypeInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already Have An Account</h2>
        <span>Sign in with Your Email and Password</span>

        <form onClick={this.OnSubmitButton}>
          <FormInput
            onChange={this.onTypeInputChange}
            type="email"
            name="email"
            value={this.state.email}
            label={"email"}
            required
          />

          <FormInput
            onChange={this.onTypeInputChange}
            type="password"
            name="password"
            value={this.state.password}
            label={"password"}
            required
          />
          <div className="buttons">
            <CustomButton>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
