import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { NgIconComponent } from "@ng-icons/core";
import { CartService } from "../../services/cart.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-checkout",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, NgIconComponent],
  templateUrl: "./checkout.component.html",
  styleUrl: "./checkout.component.css",
})
export class CheckoutComponent {
  payment = {
    customerId: 0,
    firstName: "",
    lastName: "",
    cardNumber: "",
    expiration: "",
    items: [] as string[],
  };
  errorMessage = "";

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router,
  ) {}

  /** Logs the user out. */
  onLogout() {
    this.authService.logout().subscribe();
  }

  /** Submits the payment information to check out. */
  onSubmit() {
    this.cartService.checkout(this.payment).subscribe();
  }
}