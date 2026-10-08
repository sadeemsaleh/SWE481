import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Router } from "@angular/router";
import { BROWSE_LETTERS, GenresResponse } from "../../models/models";
import { MovieService } from "../../services/movie.service";
import { FormsModule } from "@angular/forms";
import { NgIconComponent } from "@ng-icons/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgIconComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
  // Full text search + autocomplete
  fulltextQuery = "";
  suggestions: { id: string; title: string }[] = [];
  selectedIndex = -1;

  browseLetters = BROWSE_LETTERS;

  // Search form model
  searchForm = {
    title: "",
    year: null as number | null,
    director: "",
    star: "",
  };

  constructor(
    private authService: AuthService,
    private movieService: MovieService,
    private router: Router,
  ) {}

  /** Loads the genres when the component is initialized. */
  ngOnInit() {
    this.movieService.loadGenres();
  }

  /** Logs the user out. */
  onLogout() {
    this.authService.logout().subscribe();
  }

  /** The genres loaded by the movie service. */
  get genres() {
    return this.movieService.genres;
  }

  /** Fetches autocomplete suggestions for the text typed in the search box. */
  onFulltextInput() {
    this.movieService.autocomplete(this.fulltextQuery).subscribe();
  }

  /** Handles keyboard navigation in the suggestions list. */
  onKeyDown(event: KeyboardEvent) {}

  /** Handles a click on a suggestion. */
  onSuggestionClick(s: { id: string; title: string }) {
    this.router.navigate(["/movies", s.id]);
  }

  /** Runs a full text search with the text in the search box. */
  onFulltextSearch() {}

  /** Handles search form submission. */
  onSearch() {}

  /** Browses movies by genre. */
  browseByGenre(genre: GenresResponse) {
    this.router.navigate(["/movies"], {
      queryParams: { genre: genre.id, genreText: genre.text },
    });
  }

  /** Clears the search form. */
  clearSearch() {}
}