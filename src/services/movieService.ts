import axios from "axios";
import type { AxiosResponse } from "axios";
import type { Movie } from "../types/movie";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

interface FetchMoviesParams {
  query: string;
}

export async function fetchMovies({
  query,
}: FetchMoviesParams): Promise<Movie[]> {
  const response: AxiosResponse<{ results: Movie[] }> = await axios.get(
    `${BASE_URL}/search/movie`,
    {
      params: {
        query,
      },
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  return response.data.results;
}
