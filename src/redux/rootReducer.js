import { combineReducers } from "redux";
import UserReducer from "./user/user.reducer";
import cartToggleReducer from "./cart/cartToggle.reducer";
import { persistReducer } from "redux-persist";
import directoryReducer from "./Directory-HomeP/directory.reducer";
import shopCollectionsReducer from "./shopCollections/shopCollections.reducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["hidden"],
};
const rootReducer = combineReducers({
  user: UserReducer,
  hidden: cartToggleReducer,
  directory: directoryReducer,
  collections: shopCollectionsReducer,
});

export default persistReducer(persistConfig, rootReducer);

//redux settings
// export default combineReducers({
//   user: UserReducer,
//   hidden: cartToggleReducer,
// });
