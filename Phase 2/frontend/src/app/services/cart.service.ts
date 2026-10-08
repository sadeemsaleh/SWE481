import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { CartItem } from "../models/models";

@Injectable({ providedIn: "root" })
export class CartService {
  private http = inject(HttpClient);
  private baseUrl = environment.backendBaseUrl;

  /** Fetches the contents of the cart. */
  getCart(): Observable<{ cart: CartItem[] }> {
    return this.http.get<{ cart: CartItem[] }>(`${this.baseUrl}/api/v1/cart`);
  }

  /** Adds a movie to the cart. */
  addToCart(movieId: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.baseUrl}/api/v1/cart`, {
      movieId,
    });
  }

  /** Removes a movie from the cart. */
  removeItem(movieId: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${this.baseUrl}/api/v1/cart/${movieId}`,
    );
  }

  /** Removes all items from the cart. */
  clearCart(): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.baseUrl}/api/v1/cart`);
  }

  /** Checks out the given movies using the given payment information. */
  checkout(payment: {
    customerId: number;
    firstName: string;
    lastName: string;
    cardNumber: string;
    expiration: string;
    items: string[];
  }): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      `${this.baseUrl}/api/v1/cart/checkout`,
      payment,
    );
  }
}