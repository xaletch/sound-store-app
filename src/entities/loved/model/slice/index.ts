import { TracksData } from "@/entities/sound/model/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LovedState {
  lovedTracks: TracksData[] | [], 
  isLoading: boolean;
}

const initialState: LovedState = {
  lovedTracks: [],
  isLoading: true
};

export const lovedSlice = createSlice({
  name: "loved",
  initialState,
  reducers: {
    setLovedTracks: (state, action: PayloadAction<TracksData[]>) => {
      state.lovedTracks = action.payload
    },
    setLovedLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  },
});

export const { setLovedTracks, setLovedLoading } = lovedSlice.actions;
export default lovedSlice.reducer;