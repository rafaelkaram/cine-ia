export interface MediaResult {
  id: number;
  title: string;
  overview: string;
  posterUrl: string | null;
  mediaType: "movie" | "tv" | "person";
}

export interface DetailedMedia {
  id: number;
  title: string;
  overview: string;
  posterUrl: string | null;
  backdropUrl: string | null;
  releaseDate: string;
  rating: number;
  genres: string[];
  runtime?: number;
  seasons?: number;
  episodes?: number;
  mediaType: "movie" | "tv";
  status: string;
  originalLanguage: string;
  voteCount: number;
}

export type MediaType = "movie" | "tv";
