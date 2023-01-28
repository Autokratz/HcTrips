import {configureStore} from '@reduxjs/toolkit';
import {logger} from "redux-logger";
import {campsitesReducer} from "../features/campsites/campsitesSlice";
import {promotionsReducer} from "../features/promotions/promotionsSlice";
import {partnersReducer} from "../features/partners/partnersSlice";
import {commentsReducer} from "../features/comments/commentsSlice";
import {userReducer} from "../features/user/userSlice";

export const store = configureStore({
    reducer: {
        campsites: campsitesReducer,
        promotions: promotionsReducer,
        partners: partnersReducer,
        comments: commentsReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});