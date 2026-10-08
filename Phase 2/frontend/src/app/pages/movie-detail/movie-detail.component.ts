import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, ActivatedRoute, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MovieService } from "../../services/movie.service";
import { MovieDetailResponse } from "../../models/models";
import { AuthService } from "../../services/auth.service";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-movie-detail",
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: "./movie-detail.component.html",
  styleUrl: "./movie-detail.component.css",
})
export class MovieDetailComponent implements OnInit {
  movieId = "";
  private movieService = inject(MovieService);

  movie!: MovieDetailResponse;

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  /** Logs the user out. */
  onLogout() {
    this.authService.logout().subscribe();
  }

  /** Reads the movie id from the route and loads the movie details. */
  ngOnInit() {
    this.movieId = this.route.snapshot.params["id"];

    this.loadMovieDetails();
  }

  /** Fetches the details of the movie from the backend. */
  private loadMovieDetails(): void {
    this.movieService.getMovieDetails(this.movieId).subscribe();
  }

  /** The names of the movie's genres, separated by commas. */
  // eslint-disable-next-line @typescript-eslint/class-literal-property-style
  get genreNames(): string {
    return "";
  }

  /** Adds the movie to the cart. */
  addToCart() {
    this.cartService.addToCart(this.movie.id).subscribe();
  }
}
