import {configureStore} from "@reduxjs/toolkit"
import {counterSlice} from "../slices/counter"
import {apiSlice} from "../slices/api/apiSlice"
export const store= configureStore({
    reducer:{
        counter: counterSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})