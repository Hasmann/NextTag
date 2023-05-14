import React from "react";
import "./signUpEmail.styles.scss";
import { auth, createUserProfile } from "./../../Firebase/firebase.utils";
import CustomButton from "./../Button/buttonComponents.component";
import FormInput from "./../FormInputComponent/formInputComponent.component";
class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    };
  }
  setFormState = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  signUpSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, passwordConfirm } = this.state;
    if (password !== passwordConfirm) {
      alert("Passwords Do Not Match");
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfile(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        passwordConfirm: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { displayName, email, password, passwordConfirm } = this.state;
    return (
      <div className="signUp">
        <h2 className="title">I do not have an Account</h2>
        <span>Sign Up with Your Email and Password</span>
        <form className="sign-up-form" onSubmit={this.signUpSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.setFormState}
            label={"Display Name"}
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.setFormState}
            label={"Email"}
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.setFormState}
            label={"Password"}
            required
          />

          <FormInput
            type="password"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={this.setFormState}
            label={"Confirm Password"}
            required
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
