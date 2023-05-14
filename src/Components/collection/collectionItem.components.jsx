import React from "react";
import "./collectionItem.style.scss";
import CustomButton from "./../Button/buttonComponents.component";
import { AddToCart } from "../../redux/cart/cartToggle.action";
import { connect } from "react-redux";
const CollectionItem = ({ id, item, AddToCart }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
      </div>
      <CustomButton
        className="custom-button"
        onClick={() => AddToCart(item)}
        inverted
      >
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  AddToCart: (cartItem) => dispatch(AddToCart(cartItem)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
