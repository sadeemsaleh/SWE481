import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { DashboardService } from "../../services/dashboard.service";
import { ImportResult, TableMetadata } from "../../models/models";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  activeTab: "star" | "metadata" | "movie" | "import" = "star";

  // Insert star form
  starName = "";
  starBirthYear: number | null = null;
  starSuccessMessage = "";
  starErrorMessage = "";

  // Metadata
  metadata: TableMetadata[] = [];
  metadataLoaded = false;

  // Add movie form
  movie = {
    title: "",
    year: null as number | null,
    director: "",
    starName: "",
    genreName: "",
  };
  movieSuccessMessage = "";
  movieErrorMessage = "";

  // Import XML form
  mainsFile: File | null = null;
  actorsFile: File | null = null;
  castsFile: File | null = null;
  importing = false;
  importResult: ImportResult | null = null;
  importError = "";

  constructor(
    public dashboardService: DashboardService,
    private router: Router,
  ) {}

  /** Preloads the metadata when the component is initialized. */
  ngOnInit() {
    this.loadMetadata();
  }

  /** Logs the employee out. */
  onLogout() {
    this.dashboardService.logout().subscribe();
  }

  /** Inserts a new star from the star form. */
  insertStar() {
    this.dashboardService
      .insertStar(this.starName, this.starBirthYear ?? undefined)
      .subscribe();
  }

  /** Loads the database metadata (tables and columns). */
  loadMetadata() {
    this.dashboardService.getMetadata().subscribe();
  }

  /** Adds a new movie from the movie form. */
  addMovie() {
    this.dashboardService
      .addMovie({
        title: this.movie.title,
        year: this.movie.year as number,
        director: this.movie.director,
        starName: this.movie.starName,
        genreName: this.movie.genreName,
      })
      .subscribe();
  }

  /** Stores the file chosen in a file input as the mains, actors or casts file. */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onFileSelected(event: Event, type: "mains" | "actors" | "casts") {
    // not implemented yet
  }

  /** Uploads the three selected XML files to be imported. */
  triggerImport() {
    this.dashboardService
      .importXml(
        this.mainsFile as File,
        this.actorsFile as File,
        this.castsFile as File,
      )
      .subscribe();
  }
}
