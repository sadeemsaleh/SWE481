import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { CartService } from "../../services/cart.service";
import { CartItem } from "../../models/models";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: "./cart.component.html",
  styleUrl: "./cart.component.css",
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private router: Router,
  ) {}

  /** Logs the user out. */
  onLogout() {
    this.authService.logout().subscribe();
  }

  /** Loads the cart when the component is initialized. */
  ngOnInit() {
    this.loadCart();
  }

  /** Fetches the contents of the cart from the backend. */
  loadCart() {
    this.cartService.getCart().subscribe();
  }

  /** Removes a movie from the cart. */
  removeItem(movieId: string) {
    this.cartService.removeItem(movieId).subscribe();
  }

  /** Removes all items from the cart. */
  clearCart() {
    this.cartService.clearCart().subscribe();
  }

  /** Goes to the checkout page. */
  proceedToCheckout() {
    this.router.navigate(["/checkout"]);
  }
}
