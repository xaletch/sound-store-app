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
    setLovedTracks: (state, action: PayloadAction<{ tracks: TracksData[]; replace?: boolean }>) => {
      const { tracks, replace } = action.payload;
    
      if (replace) {
        state.lovedTracks = tracks;
        return;
      }
    
      if (state.lovedTracks.length === 0) {
        state.lovedTracks = tracks;
        return;
      }
    
      const newTracks = tracks.filter(
        (newTrack) => !state.lovedTracks.some((existingTrack) => existingTrack.Id === newTrack.Id)
      );
    
      if (newTracks.length > 0) {
        state.lovedTracks = [...state.lovedTracks, ...newTracks];
      }
    },
    setLovedLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  },
});

export const { setLovedTracks, setLovedLoading } = lovedSlice.actions;
export default lovedSlice.reducer;