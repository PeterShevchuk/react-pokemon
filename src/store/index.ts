import {combineReducers, configureStore} from "@reduxjs/toolkit";
import app from './app/slice'

const reducer = combineReducers({
    app,
});

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
            .prepend()
            .concat(),
});
