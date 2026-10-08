import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  email = "";
  password = "";
  errorMessage = "";

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onLogin() {
    this.errorMessage = "";
    this.authService.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(["/home"]),
      error: () => (this.errorMessage = "Invalid email or password"),
    });
  }
}
