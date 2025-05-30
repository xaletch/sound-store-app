import { foldersSlice } from "@/entities/folders/model/slice";
import { lovedSlice } from "@/entities/loved/model/slice";
import { modalsSlice } from "@/entities/modals/model/slice";
import { tracksSlice } from "@/entities/search/model/slice";
import { soundSlice } from "@/entities/sound/model/slice";
import { subscribeDataSlice } from "@/entities/subscribe/model/slice";
import { userSlice } from "@/entities/user/model/slice";
import { playerSlice } from "@/features/audio-player/model/slice";
import { filterSlice } from "@/features/filters/model/slice";
import { filterLoveSlice } from "@/features/like/model/slice";
import { PaymentSlice } from "@/features/payment/model/slice/payment.slice";
import { searchSlice } from "@/features/search/model/slice";
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
        loved: lovedSlice.reducer,
        filterLove: filterLoveSlice.reducer,
        tracks: tracksSlice.reducer,
        user: userSlice.reducer,
        player: playerSlice.reducer,
        filter: filterSlice.reducer,
        search: searchSlice.reducer,
        modals: modalsSlice.reducer,

        payment: PaymentSlice.reducer,
    },

    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat([API.middleware]);
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
