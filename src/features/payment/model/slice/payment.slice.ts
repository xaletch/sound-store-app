// SubscribeRequest
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SubscribeRequest, SubscribeResponse } from '../types/subscribe.type';

interface PaymentState {
  select: SubscribeRequest | undefined;
  payment: SubscribeResponse | undefined;
}

const initialState: PaymentState = {
  select: undefined,
  payment: JSON.parse(sessionStorage.getItem('payment') || '{}'),
};

export const PaymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPaymentSelect(state, action: PayloadAction<SubscribeRequest>) {
      state.select = action.payload;
    },
    setPayment(state, action: PayloadAction<SubscribeResponse>) {
      state.payment = action.payload;

      sessionStorage.setItem('payment', JSON.stringify(action.payload));
    }
  },
});

export const { setPaymentSelect, setPayment } = PaymentSlice.actions;
export default PaymentSlice.reducer;