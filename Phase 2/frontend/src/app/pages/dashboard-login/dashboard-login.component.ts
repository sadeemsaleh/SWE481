import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { DashboardService } from "../../services/dashboard.service";

@Component({
  selector: "app-dashboard-login",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: "./dashboard-login.component.html",
})
export class DashboardLoginComponent {
  email = "";
  password = "";
  errorMessage = "";

  constructor(
    private dashboardService: DashboardService,
    private router: Router,
  ) {}

  onLogin() {
    this.errorMessage = "";
    this.dashboardService.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(["/dashboard"]),
      error: () => (this.errorMessage = "Invalid email or password"),
    });
  }
}
