import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SoundPackData, TracksData } from "../types";

export interface SoundState {
  pack: SoundPackData | null,
  tracks: TracksData[] | [], 
}

const initialState: SoundState = {
  pack: null,
  tracks: [],
};

export const soundSlice = createSlice({
  name: "sound",
  initialState,
  reducers: {
    setSoundPack: (state, action: PayloadAction<SoundPackData>) => {
      state.pack = action.payload;
    },
    setSoundTracks: (state, action: PayloadAction<TracksData[]>) => {
      state.tracks = action.payload
    }
  },
});

export const { setSoundPack, setSoundTracks } = soundSlice.actions;
export default soundSlice.reducer;