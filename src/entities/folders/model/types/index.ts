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