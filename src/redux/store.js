import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { usersReducer } from "./slice";
import followersSlice from "./followersSlice";
import filterReducer from "./filterReducer";

const followConfig = {
  key: "isFollow",
  storage,
};

const filtersConfig = {
  key: "filter",
  storage,
};

export const store = configureStore({
  reducer: {
    users: usersReducer,
    isFollow: persistReducer(followConfig, followersSlice),
    filter: persistReducer(filtersConfig, filterReducer),
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
