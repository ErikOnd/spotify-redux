import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouriteReducer";
import musicReducer from "../reducers/musicReducer";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  storage: localStorage,
  key: "root",
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENV_SECRET_KEY,
    }),
  ],
};

const combinedReducer = combineReducers({
  favourite: favouriteReducer,
  all: musicReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistedStore = persistStore(store);

export { store, persistedStore };
