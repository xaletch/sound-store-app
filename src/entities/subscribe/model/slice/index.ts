import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SubscribeData } from "../types";

export interface SubscribeDataState {
  subscribers: SubscribeData[] | []; 
}

const initialState: SubscribeDataState = {
  subscribers: [],
};

export const subscribeDataSlice = createSlice({
  name: "subscribe_data",
  initialState,
  reducers: {
    setSubscribers: (state, action: PayloadAction<SubscribeData[]>) => {
      state.subscribers = action.payload;
    }
  },
});

export const { setSubscribers } = subscribeDataSlice.actions;
export default subscribeDataSlice.reducer;