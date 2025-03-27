import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILovedTracks, IPlayerTrack, ITrackData } from "../types";

export interface PlayerState {
  playerTrack: IPlayerTrack | null;
  isPlaying: boolean;
  isPlayer: boolean;
  currentPlayingId: number | null;
  currentTime: number;
  tracks: ITrackData[] | null;
  lovedTracks: Record<number, boolean>;
}

const initialState: PlayerState = {
  playerTrack: null,
  isPlaying: false,
  isPlayer: false,
  currentPlayingId: null,
  currentTime: 0,
  tracks: null,
  lovedTracks: {}
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayerTrack: (state, action: PayloadAction<IPlayerTrack | null>) => {
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
    setPlayerTracks: (state, action: PayloadAction<ITrackData[] | null>) => {
      state.tracks = action.payload
    },
    setLovedPlayerTracks: (state, action: PayloadAction<ILovedTracks[]>) => {
      action.payload.forEach(update => {
        state.lovedTracks[update.trackId] = update.loved;
      });
    }
  },
});

export const { setPlayerTrack, setIsPlaying, setIsPlayer, setCurrentPlayingId, setCurrentTime, setPlayerTracks, setLovedPlayerTracks } = playerSlice.actions;
export default playerSlice.reducer;