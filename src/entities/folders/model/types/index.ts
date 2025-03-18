import { TracksData } from "@/entities/sound/model/types";

export interface PackData {
  Id: number;
  Name: string;
  PhotoPath: string;
  Genre: string;
  Describe: string;
  Autor: string;
  Listenings: number;
} 

export interface FoldersResponse {
  Packs: PackData[];
}

export interface FoldersRequest {
  id: string;
}

export interface TracksResponse {
  Tracks: TracksData[];
}

export interface PopularTracksRequest {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  page: any;
}

export interface AllTracksRequest {
  page: string;
  Genre: string;
  Type: string;
  Instruments: number[] | null;
}