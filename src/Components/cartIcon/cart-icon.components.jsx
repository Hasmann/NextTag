import React from "react";
import { ReactComponent as CartLogo } from "./../../assets/11.2 shopping-bag.svg";
import { connect } from "react-redux";
import { cartNumber } from "../../redux/cart/cart.selectors";
import "./cart-icon.styles.scss";
import { ToggleCart } from "../../redux/cart/cartToggle.action";

const BagIcon = ({ ToggleCart, itemCount }) => {
  return (
    <div onClick={ToggleCart} className="cart-icon">
      <CartLogo className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    itemCount: cartNumber(state),

    // state.hidden.cartItems.reduce((accumulator, item) => {
    //   return (accumulator += item.quantity);
    // }, 0),
  };
};
const matchDispatchProps = (dispatch) => ({
  ToggleCart: () => dispatch(ToggleCart()),
});

export default connect(mapStateToProps, matchDispatchProps)(BagIcon);
