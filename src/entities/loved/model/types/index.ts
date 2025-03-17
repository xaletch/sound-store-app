import { TracksData } from "@/entities/sound/model/types";

export interface LovedResponse {
  Tracks: TracksData[];
}

export interface LovedRequest {
  id: string;
}