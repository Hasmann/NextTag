import { createSelector } from "reselect";

const selectDirectory = (state) => {
  return state.directory;
};

export const getDirectory = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
