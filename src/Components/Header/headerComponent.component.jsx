import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../../assets/icons8-tags-50.svg";
import "./headerComponent.style.scss";
import { auth } from "./../../Firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import BagIcon from "../cartIcon/cart-icon.components";
import CartPopUp from "./../cartPopUp/cartPopUp.components";
import { setState } from "./../../redux/user/user.selectors";
import { getHidden } from "./../../redux/cart/cart.selectors";
const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>

        {currentUser ? (
          <Link
            className="option"
            onClick={(e) => {
              e.preventDefault();
              auth.signOut();
            }}
          >
            SIGN OUT
          </Link>
        ) : (
          <Link className="option" to="/signIn">
            SIGN IN
          </Link>
        )}
        <Link className="option">
          <BagIcon />
        </Link>
      </div>
      {hidden ? null : <CartPopUp />}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: setState,
  hidden: getHidden,
});
export default connect(mapStateToProps)(Header);
