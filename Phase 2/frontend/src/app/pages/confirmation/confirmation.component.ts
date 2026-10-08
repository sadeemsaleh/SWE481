import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-confirmation",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./confirmation.component.html",
  styleUrl: "./confirmation.component.css",
})
export class ConfirmationComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

onLogout() {
  this.authService.logout().subscribe();
}
}
