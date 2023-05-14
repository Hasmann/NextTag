import CartToggleTypes from "./cartToggle.types";
import {
  addToCart,
  removeItemFromCart,
  AddQuantityToCart,
  RemoveQuantityFromCart,
} from "./addToCart.utils";
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartToggleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartToggleTypes.CART_TOGGLE_TYPES:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartToggleTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: addToCart(state.cartItems, action.payload),
      };
    case CartToggleTypes.DISPLAY_CART_DETAILS:
      return { ...state, myCart: state.cartItems };
    case CartToggleTypes.REMOVE_ITEM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartToggleTypes.ADD_QUANTITY:
      return {
        ...state,
        cartItems: AddQuantityToCart(state.cartItems, action.payload),
      };
    case CartToggleTypes.REMOVE_QUANTITY:
      return {
        ...state,
        cartItems: RemoveQuantityFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
export default cartToggleReducer;
