import { TracksData } from "@/entities/sound/model/types";

export interface LovedResponse {
  Tracks: TracksData[];
}

export interface LovedRequest {
  id: string;
  Genre: string;
  Type: string;
  Instruments: number[] | null;
}

export interface LovedTrack {
  id: string;
}