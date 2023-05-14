import "./checkOutComponent.styles.scss";
import {
  removeItemFromCart,
  AddQuantityToCart,
  RemoveQuantityFromCart,
} from "./../../redux/cart/cartToggle.action";
import { connect } from "react-redux";
const CheckoutItem = ({ cartItem, removeItem, clearItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (cartItem) => dispatch(removeItemFromCart(cartItem)),
  removeItem: (cartItem) => dispatch(AddQuantityToCart(cartItem)),
  addItem: (cartItem) => dispatch(RemoveQuantityFromCart(cartItem)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
