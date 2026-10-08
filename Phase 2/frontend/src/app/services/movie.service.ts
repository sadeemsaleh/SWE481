import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import {
  StarDetailResponse,
  MovieDetailResponse,
  GenresResponse,
  PAGE_SIZE,
} from "../models/models";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  private http = inject(HttpClient);
  private baseUrl = environment.backendBaseUrl;

  /** The genres fetched from the backend. */
  genres: GenresResponse[] = [];

  /** Fetches all genres from the backend. */
  loadGenres(): void {
    this.http
      .get<GenresResponse[]>(`${this.baseUrl}/api/v1/movie/genres`)
      .subscribe();
  }

  /** Fetches the details of a star, including the movies they appear in. */
  getStarDetails(starId: string): Observable<StarDetailResponse> {
    return this.http.get<StarDetailResponse>(
      `${this.baseUrl}/api/v1/movie/star/${starId}`,
    );
  }

  /** Fetches the details of a movie, including its genres and stars. */
  getMovieDetails(movieId: string): Observable<MovieDetailResponse> {
    return this.http.get<MovieDetailResponse>(
      `${this.baseUrl}/api/v1/movie/movie/${movieId}`,
    );
  }

  /** Fetches a page of the movies of a genre. */
  getMoviesByGenre(
    genreId: number,
    page = 1,
    pageSize = PAGE_SIZE,
    sortBy = "title",
    sortOrder = "asc",
  ): Observable<{ movies: MovieDetailResponse[]; totalCount: number }> {
    return this.http.get<{ movies: MovieDetailResponse[]; totalCount: number }>(
      `${this.baseUrl}/api/v1/movie/genre/${genreId}?page=${page}&pageSize=${pageSize}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
    );
  }

  /** Fetches a page of the movies whose title starts with a letter. */
  getMoviesByLetter(
    letter: string,
    page = 1,
    pageSize = PAGE_SIZE,
    sortBy = "title",
    sortOrder = "asc",
  ): Observable<{ movies: MovieDetailResponse[]; totalCount: number }> {
    return this.http.get<{ movies: MovieDetailResponse[]; totalCount: number }>(
      `${this.baseUrl}/api/v1/movie/title/${letter}?page=${page}&pageSize=${pageSize}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
    );
  }

  /** Searches movies by title, year, director and star. */
  getMovies(search: {
    page?: number;
    pageSize?: number;
    genre?: number;
    letter?: string | null;
    title?: string;
    year?: number | null;
    director?: string;
    star?: string;
    sortBy?: string;
    sortOrder?: string;
  }): Observable<{ movies: MovieDetailResponse[]; totalCount: number }> {
    return this.http.post<{
      movies: MovieDetailResponse[];
      totalCount: number;
    }>(`${this.baseUrl}/api/v1/movie/search`, { search });
  }

  /** Searches movies with a full text query. */
  fullTextSearch(
    query: string,
    page = 1,
    pageSize = PAGE_SIZE,
  ): Observable<{ movies: MovieDetailResponse[]; totalCount: number }> {
    return this.http.get<{ movies: MovieDetailResponse[]; totalCount: number }>(
      `${this.baseUrl}/api/v1/movie/fulltext?q=${encodeURIComponent(query)}&page=${page}&pageSize=${pageSize}`,
    );
  }

  /** Fetches autocomplete suggestions (id and title) for a query. */
  autocomplete(query: string): Observable<{ id: string; title: string }[]> {
    return this.http.get<{ id: string; title: string }[]>(
      `${this.baseUrl}/api/v1/movie/autocomplete?q=${encodeURIComponent(query)}`,
    );
  }
}