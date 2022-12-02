import {configureStore} from "@reduxjs/toolkit";
import auth from "./slices/authFormSlicer";
import cache from "./slices/cacheSlicer";
import cart from "./slices/cartSlicer";
import notification from "./slices/notificationSlicer";
import motorcycles from "./slices/motorcyclesSlicer";

export const store = configureStore({
    reducer: {
        authForm: auth,
        cache: cache,
        cart: cart,
        notification: notification,
        motorcycles: motorcycles
    }
})