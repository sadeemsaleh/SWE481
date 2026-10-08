import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Employee, ImportResult, TableMetadata } from "../models/models";

@Injectable({ providedIn: "root" })
export class DashboardService {
  private http = inject(HttpClient);
  private baseUrl = environment.backendBaseUrl;

  /** Logs an employee in with the given email and password. */
  login(email: string, password: string): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}/api/v1/dashboard/login`, {
      email,
      password,
    });
  }

  /** Logs the current employee out. */
  logout(): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(
      `${this.baseUrl}/api/v1/dashboard/logout`,
      {},
    );
  }

  /** Checks whether the employee is authenticated. The backend responds 401 if not. */
  authenticate(): Observable<Employee> {
    return this.http.get<Employee>(
      `${this.baseUrl}/api/v1/dashboard/authenticate`,
    );
  }

  /** Inserts a new star, with an optional birth year. */
  insertStar(
    name: string,
    birthYear?: number,
  ): Observable<{ success: boolean; id: string; message: string }> {
    return this.http.post<{ success: boolean; id: string; message: string }>(
      `${this.baseUrl}/api/v1/dashboard/star`,
      { name, birthYear },
    );
  }

  /** Fetches the metadata (tables and their columns) of the database. */
  getMetadata(): Observable<TableMetadata[]> {
    return this.http.get<TableMetadata[]>(
      `${this.baseUrl}/api/v1/dashboard/metadata`,
    );
  }

  /** Adds a new movie along with its star and genre. */
  addMovie(movie: {
    title: string;
    year: number;
    director: string;
    starName: string;
    genreName: string;
  }): Observable<{ success: boolean; id: string; message: string }> {
    return this.http.post<{ success: boolean; id: string; message: string }>(
      `${this.baseUrl}/api/v1/dashboard/movie`,
      movie,
    );
  }

  /** Uploads the three XML files (mains, actors, casts) to be imported. */
  importXml(mains: File, actors: File, casts: File): Observable<ImportResult> {
    const formData = new FormData();
    formData.append("mains", mains);
    formData.append("actors", actors);
    formData.append("casts", casts);

    // no Content-Type header — browser sets it with boundary
    return this.http.post<ImportResult>(
      `${this.baseUrl}/api/v1/dashboard/import`,
      formData,
    );
  }
}
