import { TracksData } from "@/entities/sound/model/types";

export interface LovedResponse {
  Tracks: TracksData[];
}

export interface LovedRequest {
  id: string;
  Genre: string[] | null;
  Type: string[] | null;
  Instruments: number[] | null;
}

export interface LovedTrack {
  id: string;
}