import SHOP_DATA from "./../../pages/shopPage/itemsData";
const INITIAL_STATE = {
  shopCollections: SHOP_DATA,
};

const shopCollectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopCollectionsReducer;
