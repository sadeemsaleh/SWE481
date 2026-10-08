import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { AuthUser } from "../models/models";

@Injectable({ providedIn: "root" })
export class AuthService {
  private http = inject(HttpClient);
  private baseUrl = environment.backendBaseUrl;

  /** Logs a user in with the given email and password. */
  login(email: string, password: string): Observable<AuthUser> {
    return this.http.post<AuthUser>(`${this.baseUrl}/api/v1/user/login`, { email, password });
  }

  /** Logs the current user out. */
  logout(): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(`${this.baseUrl}/api/v1/user/logout`, {});
  }

  /** Checks whether the user is authenticated. Emits null (rather than erroring) if not. */
  authenticate(): Observable<AuthUser | null> {
    return this.http.get<AuthUser | null>(`${this.baseUrl}/api/v1/user/authenticate`);
  }
}