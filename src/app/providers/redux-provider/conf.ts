import { foldersSlice } from "@/entities/folders/model/slice";
import { soundSlice } from "@/entities/sound/model/slice";
import { subscribeDataSlice } from "@/entities/subscribe/model/slice";
import { subscribeSlice } from "@/features/subscribe/model/slice";
import { API } from "@/shared/api";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [API.reducerPath]: API.reducer,

        // slice
        subscribe: subscribeSlice.reducer,
        subscribers: subscribeDataSlice.reducer,
        folders: foldersSlice.reducer,
        sounds: soundSlice.reducer,
    },

    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat([API.middleware]);
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
