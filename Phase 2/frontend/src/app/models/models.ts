export interface StarDetailResponse {
  id: string;
  name: string;
  birthYear: number;
  movies: { id: string; title: string }[];
}

export interface StarsOfMovie {
  starID: string;
  name: string;
}

export interface MovieDetailResponse {
  id: string;
  title: string;
  year: number;
  director: string;
  rating: number;
  genres: { id: number; text: string }[];
  stars: StarsOfMovie[];
}

export interface GenresResponse {
  id: number;
  text: string;
}

/** A user, as returned by the backend. */
export interface AuthUser {
  id: number;
  email: string;
  firstname?: string;
  lastname?: string;
}

export interface Employee {
  email: string;
  fullname: string;
}

export interface TableMetadata {
  table: string;
  columns: { name: string; type: string }[];
}

/** Characters offered for browsing movies by the first character of the title. */
export const BROWSE_LETTERS: string[] = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
];

/** Default number of movies shown per page. */
export const PAGE_SIZE = 12;

/** An item in the cart, as returned by the backend. */
export interface CartItem {
  movieId: string;
  title: string;
}

/** The result of importing the XML files, as returned by the backend. */
export interface ImportResult {
  success: boolean;
  moviesInserted: number;
  moviesSkipped: number;
  genresInserted: number;
  starsInserted: number;
  starsSkipped: number;
  errorCount: number;
  errors: string[];
}