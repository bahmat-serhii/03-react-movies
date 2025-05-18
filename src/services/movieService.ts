import axios from "axios";
import type { AxiosResponse } from "axios";
import type { Movie } from "../types/movie";

interface FetchMoviesParams {
  query: string;
}

export async function fetchMovies({
  query,
}: FetchMoviesParams): Promise<Movie[]> {
  const url = "https://api.themoviedb.org/3/search/movie";

  const response: AxiosResponse<{ results: Movie[] }> = await axios.get(url, {
    params: {
      query,
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });

  return response.data.results;
}
