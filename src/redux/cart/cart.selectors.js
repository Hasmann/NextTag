import { createSelector } from "reselect";

const selectCart = (state) => {
  return state.hidden;
};

export const SelectCartItem = createSelector(
  [selectCart],
  (hidden) => hidden.cartItems
);
export const getHidden = createSelector(
  [selectCart],
  (hidden) => hidden.hidden
);
export const cartNumber = createSelector([SelectCartItem], (cartItems) =>
  cartItems.reduce((acc, item) => {
    return (acc += item.quantity);
  }, 0)
);
export const cartTotal = createSelector([SelectCartItem], (cartItems) =>
  cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0)
);
