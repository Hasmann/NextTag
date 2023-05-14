import { createSelector } from "reselect";

const getState = (state) => {
  return state.collections;
};

export const getCollectionsData = createSelector(
  [getState],
  (collections) => collections.shopCollections
);

export const getSetCollectionsArray = createSelector(
  [getCollectionsData],
  (shopCollections) =>
    Object.keys(shopCollections).map((sc) => {
      return shopCollections[sc];
    })
);

export const getSpecifiedCollection = (propsParams) => {
  return createSelector(
    [getCollectionsData],
    (shopCollections) => shopCollections[propsParams]
  );
};
