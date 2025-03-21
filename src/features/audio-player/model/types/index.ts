export type IPlayerTrack = {
  name: string;
  creator: string;
  id: number;
  track: string;
  loved?: boolean;
  packId: number;
}

export interface ITrackData {
  Id: number;
  PackId: number;
  Name: string;
  Genre: string;
  Type: string;
  Downloads?: number;
  Listenings?: number;
  Downloaded?: boolean;
  Loved?: boolean;
}

export type ILovedTracks = {
  trackId: number;
  loved: boolean;
}