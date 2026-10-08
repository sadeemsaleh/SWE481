import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, ActivatedRoute, Router } from "@angular/router";
import { MovieService } from "../../services/movie.service";
import { StarDetailResponse } from "../../models/models";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-star-detail",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./star-detail.component.html",
  styleUrl: "./star-detail.component.css",
})
export class StarDetailComponent implements OnInit {
  starId = "";
  private movieService = inject(MovieService);

  star!: StarDetailResponse;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  /** Logs the user out. */
  onLogout() {
    this.authService.logout().subscribe();
  }

  /** Reads the star id from the route and loads the star details. */
  ngOnInit() {
    this.starId = this.route.snapshot.params["id"];
    this.loadStarDetails();
  }

  /** Fetches the details of the star from the backend. */
  private loadStarDetails(): void {
    this.movieService.getStarDetails(this.starId).subscribe();
  }
}