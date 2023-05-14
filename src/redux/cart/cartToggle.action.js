import { CartToggleTypes } from "./cartToggle.types";

export const ToggleCart = () => {
  return {
    type: CartToggleTypes.CART_TOGGLE_TYPES,
  };
};

export const AddToCart = (cartItem) => {
  return {
    type: CartToggleTypes.ADD_TO_CART,
    payload: cartItem,
  };
};
export const removeItemFromCart = (cartItem) => {
  return {
    type: CartToggleTypes.REMOVE_ITEM_CART,
    payload: cartItem,
  };
};
export const AddQuantityToCart = (cartItem) => {
  return {
    type: CartToggleTypes.ADD_QUANTITY,
    payload: cartItem,
  };
};

export const RemoveQuantityFromCart = (cartItem) => {
  return {
    type: CartToggleTypes.REMOVE_QUANTITY,
    payload: cartItem,
  };
};

export const showCartDetails = () => {
  return {
    type: CartToggleTypes.DISPLAY_CART_DETAILS,
  };
};
