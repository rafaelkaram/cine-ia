import axios from "axios";

const TMDB_API_KEY = process.env.EXPO_PUBLIC_TMDB_API_KEY;
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

interface DetailedMedia {
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

export async function searchMediaByTitle(title: string) {
  if (!TMDB_API_KEY) {
    console.error("ERRO: TMDB API Key não configurada!");
    return null;
  }

  try {
    const response = await axios.get(`${TMDB_BASE_URL}/search/multi`, {
      params: {
        api_key: TMDB_API_KEY,
        query: title,
        language: "pt-BR",
      },
    });

    const firstResult = response.data.results[0];

    if (!firstResult) {
      return null;
    }

    const mediaData = {
      id: firstResult.id,
      title: firstResult.title || firstResult.name,
      overview: firstResult.overview || "Sinopse não disponível.",
      posterUrl: firstResult.poster_path
        ? `${TMDB_IMAGE_BASE_URL}${firstResult.poster_path}`
        : null,
      mediaType: firstResult.media_type,
    };

    return mediaData;
  } catch (error) {
    console.error(`Erro ao buscar ${title} na TMDB:`, error);
    return null;
  }
}

export async function getMediaDetails(
  id: number,
  mediaType: "movie" | "tv"
): Promise<DetailedMedia | null> {
  if (!TMDB_API_KEY) {
    console.error("ERRO: TMDB API Key não configurada!");
    return null;
  }

  try {
    const endpoint = mediaType === "movie" ? "movie" : "tv";

    const response = await axios.get(`${TMDB_BASE_URL}/${endpoint}/${id}`, {
      params: {
        api_key: TMDB_API_KEY,
        language: "pt-BR",
      },
    });

    const data = response.data;

    const statusMapping: { [key: string]: string } = {
      Released: "Lançado",
      "In Production": "Em Produção",
      "Post Production": "Pós-Produção",
      Planned: "Planejado",
      Canceled: "Cancelado",
      Ended: "Finalizada",
      "Returning Series": "Série Renovada",
    };

    return {
      id: data.id,
      title: data.title || data.name,
      overview: data.overview || "Sinopse não disponível.",
      posterUrl: data.poster_path
        ? `${TMDB_IMAGE_BASE_URL}${data.poster_path}`
        : null,
      backdropUrl: data.backdrop_path
        ? `https://image.tmdb.org/t/p/w780${data.backdrop_path}`
        : null,
      releaseDate:
        data.release_date || data.first_air_date || "Data não disponível",
      rating: Math.round((data.vote_average || 0) * 10) / 10,
      genres: data.genres?.map((genre: any) => genre.name) || [],
      runtime: data.runtime,
      seasons: data.number_of_seasons,
      episodes: data.number_of_episodes,
      mediaType: mediaType,
      status: statusMapping[data.status] || data.status || "Não informado",
      originalLanguage:
        data.original_language?.toUpperCase() || "Não informado",
      voteCount: data.vote_count || 0,
    };
  } catch (error) {
    console.error(`Erro ao buscar detalhes do ${mediaType} ${id}:`, error);
    return null;
  }
}
