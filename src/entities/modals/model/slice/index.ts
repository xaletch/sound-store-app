import { ITrackPay } from "@/features/track";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface modalsState {
  downloadPackModal: boolean;
  downloadTrackModal: boolean;
  downloadTrackData: ITrackPay | null,
  linkModal: boolean;
  toTryModal: boolean;
}

const initialState: modalsState = {
  downloadPackModal: false,
  downloadTrackModal: false,
  downloadTrackData: null,
  linkModal: false,
  toTryModal: false
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setDownloadPackModal: (state, action: PayloadAction<boolean>) => {
      state.downloadPackModal = action.payload;
    },
    setDownloadTrackModal: (state, action: PayloadAction<boolean>) => {
      state.downloadTrackModal = action.payload;
    },
    setDownloadTrackData: (state, action: PayloadAction<ITrackPay>) => {
      state.downloadTrackData = action.payload
    },
    setLinkModal: (state, action: PayloadAction<boolean>) => {
      state.linkModal = action.payload;
    },
    setToTryModal: (state, action: PayloadAction<boolean>) => {
      state.toTryModal = action.payload;
    }
  },
});

export const { setDownloadPackModal, setDownloadTrackModal, setDownloadTrackData, setLinkModal, setToTryModal } = modalsSlice.actions;
export default modalsSlice.reducer;