import React from "react";
import "./checkout-page.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { SelectCartItem, cartTotal } from "./../../redux/cart/cart.selectors";
import CheckoutItem from "./../../Components/checkOutComponent/checkOutComponent.component";
import StripeButton from "./../../Components/stripeButtonComponent/stripeButton.components";
const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${total}</div>
      <StripeButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: SelectCartItem,
  total: cartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
