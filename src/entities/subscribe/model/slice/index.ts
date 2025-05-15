import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SubscribeData } from "../types";
import { ActiveSubscribeResponse } from "@/features/payment/model/types/active-subscribe.type";

export interface SubscribeDataState {
  subscribers: SubscribeData[] | [];
  activity: ActiveSubscribeResponse | undefined; 
}

const initialState: SubscribeDataState = {
  subscribers: [],
  activity: undefined,
};

export const subscribeDataSlice = createSlice({
  name: "subscribe_data",
  initialState,
  reducers: {
    setSubscribers: (state, action: PayloadAction<SubscribeData[]>) => {
      state.subscribers = action.payload;
    },
    setSubActivity: (state, action: PayloadAction<ActiveSubscribeResponse>) => {
      state.activity = action.payload;
    },
    updateAutoPay: (state, action: PayloadAction<boolean>) => {
      state.activity = {...state.activity!, AutoPay: action.payload}
    }
  },
});

export const { setSubscribers, setSubActivity, updateAutoPay } = subscribeDataSlice.actions;
export default subscribeDataSlice.reducer;