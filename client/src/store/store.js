import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./tokenSlice";
import userSlice from "./userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

//create the persist configuration for token Slice
const persistTokenConfig = {
  key: "token",
  storage,
};

//create the persist configuration for users slice
const persistUserConfig = {
  key: "user",
  storage,
};

//Create the persisted Reducers
const persistedTokenReducer = persistReducer(persistTokenConfig, tokenSlice);
const persistedUserReducer = persistReducer(persistUserConfig, userSlice);

// Configuring/Creating the store
const store = configureStore({
  reducer: {
    token: persistedTokenReducer,
    users: persistedUserReducer,
  },
  //To handle serializable check error
  middleware: [thunk],
});

//Create the persisted Store
const persistor = persistStore(store);

export { store, persistor };
