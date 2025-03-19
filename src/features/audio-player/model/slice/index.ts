import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlayerTrack } from "../types";

export interface PlayerState {
  playerTrack: IPlayerTrack | null;
  isPlaying: boolean;
  isPlayer: boolean;
  currentPlayingId: number | null;
  currentTime: number;
}

const initialState: PlayerState = {
  playerTrack: null,
  isPlaying: false,
  isPlayer: false,
  currentPlayingId: null,
  currentTime: 0,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayerTrack: (state, action: PayloadAction<IPlayerTrack>) => {
      state.playerTrack = action.payload;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setIsPlayer: (state, action: PayloadAction<boolean>) => {
      state.isPlayer = action.payload
    },
    setCurrentPlayingId: (state, action: PayloadAction<number | null>) => {
      state.currentPlayingId = action.payload
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload
    },
  },
});

export const { setPlayerTrack, setIsPlaying, setIsPlayer, setCurrentPlayingId, setCurrentTime } = playerSlice.actions;
export default playerSlice.reducer;