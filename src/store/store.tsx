import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "./shoppingSlice";
import usernameReducer from "./userReduxcer";

export const store = configureStore({
    reducer: {
        shopping: shoppingReducer,
        username: usernameReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;