import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface modalsState {
  downloadPackModal: boolean;
  downloadTrackModal: boolean;
  linkModal: boolean;
}

const initialState: modalsState = {
  downloadPackModal: false,
  downloadTrackModal: false,
  linkModal: false
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
    setLinkModal: (state, action: PayloadAction<boolean>) => {
      state.linkModal = action.payload;
    }
  },
});

export const { setDownloadPackModal, setDownloadTrackModal, setLinkModal } = modalsSlice.actions;
export default modalsSlice.reducer;