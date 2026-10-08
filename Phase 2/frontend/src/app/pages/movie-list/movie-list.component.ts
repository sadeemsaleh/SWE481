import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { MovieService } from "../../services/movie.service";
import { MovieDetailResponse, PAGE_SIZE } from "../../models/models";
import { NgIconComponent } from "@ng-icons/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-movie-list",
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgIconComponent],
  templateUrl: "./movie-list.component.html",
  styleUrl: "./movie-list.component.css",
})
export class MovieListComponent implements OnInit {
  movies: MovieDetailResponse[] = [];

  // Pagination
  currentPage = 1;
  totalPages = 1;
  moviesPerPage = PAGE_SIZE;

  // Current filters
  filters = {
    genre: null as number | null,
    genreText: null as string | null,
    letter: null as string | null,
    title: "",
    year: null as number | null,
    director: "",
    star: "",
    sortBy: "title",
    sortOrder: "asc",
    fulltext: "",
  };

  private movieService = inject(MovieService);

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  /** Logs the user out. */
  onLogout() {
    this.authService.logout().subscribe();
  }

  /** Loads the movies when the component is initialized. */
  ngOnInit() {
    this.loadMovies();
  }

  /** Handles a change of the sort field or order. */
  onSortChange() {}

  /** Handles a change of the page size. */
  onPageSizeChange() {}

  /** Loads the movies matching the current filters (full text, genre, letter or search). */
  loadMovies() {
    this.movieService
      .fullTextSearch(
        this.filters.fulltext,
        this.currentPage,
        this.moviesPerPage,
      )
      .subscribe();

    this.movieService
      .getMoviesByGenre(
        this.filters.genre as number,
        this.currentPage,
        this.moviesPerPage,
        this.filters.sortBy,
        this.filters.sortOrder,
      )
      .subscribe();

    this.movieService
      .getMoviesByLetter(
        this.filters.letter as string,
        this.currentPage,
        this.moviesPerPage,
        this.filters.sortBy,
        this.filters.sortOrder,
      )
      .subscribe();

    this.movieService
      .getMovies({
        page: this.currentPage,
        pageSize: this.moviesPerPage,
        title: this.filters.title,
        year: this.filters.year ?? undefined,
        director: this.filters.director,
        star: this.filters.star,
        sortBy: this.filters.sortBy,
        sortOrder: this.filters.sortOrder,
      })
      .subscribe();
  }

  /** Goes to the previous page. */
  previousPage() {}

  /** Goes to the next page. */
  nextPage() {}
}