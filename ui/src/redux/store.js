import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const reducers = combineReducers({
  /* 
    Add reducers here
    */
  // UserReducer, (Example)
});

/* Persistant Storage Configuration */
const persistConfig = {
  key: "root",
  storage,
  whitelist: [], //Reducer names to persist
  blacklist: ["Navigation"],
};

/* Persisted Reducer */
// const persistedReducer = persistReducer(persistConfig, reducers);

const persistedReducer = persistReducer(persistConfig);

/* Store */
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
