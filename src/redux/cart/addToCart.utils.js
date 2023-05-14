export const addToCart = (ArraystateCart, payloadItem) => {
  const ifExists = ArraystateCart.find((ast) => {
    return ast.id === payloadItem.id;
  });

  if (ifExists) {
    return ArraystateCart.map((item) => {
      if (item.id === payloadItem.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  }
  return [...ArraystateCart, { ...payloadItem, quantity: 1 }];
};

export const removeItemFromCart = (ArraystateCart, payload) => {
  const index = ArraystateCart.findIndex((arr) => {
    return arr === payload;
  });
  ArraystateCart.splice(index, 1);
  console.log(ArraystateCart);
  return [...ArraystateCart];
};
export const AddQuantityToCart = (ArraystateCart, payload) => {
  const ArrayMap = ArraystateCart.map((arr) => {
    if (arr.id === payload.id) {
      return { ...arr, quantity: (arr.quantity += 1) };
    }
    return arr;
  });
  console.log("THIS IS THE ARRAY MAP", ArrayMap);
  return [...ArrayMap];
};

export const RemoveQuantityFromCart = (ArraystateCart, payload) => {
  if (payload.quantity <= 1) {
    removeItemFromCart(ArraystateCart, payload);
  }
  const ArrayMap = ArraystateCart.map((arr) => {
    if (arr === payload) {
      return { ...arr, quantity: (arr.quantity -= 1) };
    }
    return arr;
  });
  console.log("THIS IS THE ARRAY MAP", ArrayMap);
  return [...ArrayMap];
};
