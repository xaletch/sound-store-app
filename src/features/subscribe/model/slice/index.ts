import { SubscribeSortType } from '@/entities/subscribe/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TariffData } from '../types';

export interface SubscribeState {
  select: SubscribeSortType;
  selectTariff: string;
  selectTariffData: TariffData | undefined;
}

const initialState: SubscribeState = {
  select: 'Месяц',
  selectTariff: '',
  selectTariffData: undefined
};

export const subscribeSlice = createSlice({
  name: 'subscribe',
  initialState,
  reducers: {
    setSelectSubscribe: (state, action: PayloadAction<SubscribeSortType>) => {
      state.select = action.payload;
    },
    setSelectTariff: (state, action: PayloadAction<string>) => {
      state.selectTariff = action.payload;
    },
    setSelectTariffData: (state, action: PayloadAction<TariffData>) => {
      state.selectTariffData = action.payload;
    }
  },
});

export const { setSelectSubscribe, setSelectTariff, setSelectTariffData } = subscribeSlice.actions;
export default subscribeSlice.reducer;
