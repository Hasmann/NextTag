import React from "react";
import "./cartPopUp.styles.scss";
import { connect } from "react-redux";
import CustomButton from "./../Button/buttonComponents.component";
import CartItem from "./../cart-Item/cart-Item.components";
import { withRouter } from "react-router-dom";
import { ToggleCart } from "../../redux/cart/cartToggle.action";
const CartPopUp = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className="cart-empty">Your Cart Is Empty!!</div>
      )}
      <CustomButton
        onClick={() => {
          history.push("/checkOut");
          dispatch(ToggleCart());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cartItems: state.hidden.cartItems,
  };
};

export default withRouter(connect(mapStateToProps)(CartPopUp));
