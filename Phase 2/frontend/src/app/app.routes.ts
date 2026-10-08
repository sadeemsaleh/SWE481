import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { MovieListComponent } from "./pages/movie-list/movie-list.component";
import { MovieDetailComponent } from "./pages/movie-detail/movie-detail.component";
import { StarDetailComponent } from "./pages/star-detail/star-detail.component";
import { CartComponent } from "./pages/cart/cart.component";
import { CheckoutComponent } from "./pages/checkout/checkout.component";
import { ConfirmationComponent } from "./pages/confirmation/confirmation.component";
import { DashboardLoginComponent } from "./pages/dashboard-login/dashboard-login.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

export const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "movies", component: MovieListComponent },
  {
    path: "movies/:id",
    component: MovieDetailComponent,
  },
  {
    path: "stars/:id",
    component: StarDetailComponent,
  },
  { path: "cart", component: CartComponent},
  { path: "checkout", component: CheckoutComponent },
  {
    path: "confirmation",
    component: ConfirmationComponent,
  },
  { path: "dashboard/login", component: DashboardLoginComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  { path: "**", redirectTo: "" }, // 404 redirect to home
];
