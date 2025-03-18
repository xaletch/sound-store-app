export interface SoundPackData {
  Id: number;
  Name: string;
  PhotoPath: string;
  Genre: string;
  Describe: string;
  Autor: string;
} 

export interface TracksData {
  Id: number;
  PackId: number;
  Name: string;
  Genre: string;
  Type: string;
  Downloads: number;
  Listenings: number;
  Downloaded: boolean;
  Loved: boolean;
}

export interface SoundResponse {
  PackInfo: {
    Pack: SoundPackData;
    Tracks: TracksData[];
  }
}

export interface SoundRequest {
  id: string;
}

export interface SoundPhotoResponse {
  Photo: string;
}