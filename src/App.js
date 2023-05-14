import "./App.css";
// import { Component } from "react";
import React from "react";
import { Homepage } from "./pages/homepage/homePage.components.jsx";
import shopItemsPage from "./pages/shopPage/shopPage.jsx";
import SignInAndUpPage from "./pages/signIn-and-signUp-Page/signIn-and-signUp-Page.jsx";
import CheckoutPage from "./pages/checkoutPage/checkout.page.jsx";
import { Switch, Route, Redirect } from "react-router-dom";
import { createUserProfile, auth } from "./Firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import Header from "./Components/Header/headerComponent.component.jsx";
class App extends React.Component {
  unSubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      createUserProfile(user);
      setCurrentUser(user);
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={shopItemsPage} />
          <Route exact path="/checkOut" component={CheckoutPage} />
          <Route
            exact
            path="/signIn"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndUpPage />
            }
          />
          {/* <Homepage /> */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
