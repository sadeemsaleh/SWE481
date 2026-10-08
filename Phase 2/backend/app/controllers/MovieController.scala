package controllers

import javax.inject._
import play.api.mvc._
import play.api.libs.json._
import models.GenreModel
import models.MovieModel
import models.StarModel

/** Controller for managing movies: search, details, genre, title, star info. */
@Singleton
class MovieController @Inject() (
  val controllerComponents: ControllerComponents,
  genreModel: GenreModel,
  movieModel: MovieModel,
  starModel: StarModel
) extends BaseController {

  /** Search for movies
    *
    * Logic:
    *   - Accepts search parameters: title, director, year, star, plus pagination/sorting
    *   - Returns a paginated list of movies matching the criteria, and the total match count
    *
    * @request
    *   POST /api/v1/movie/search
    * @body
    *   { "search": { "title": "Inception", "director": "Steven", "year": 2010, "star": "Leo", "page": 1, "pageSize":
    *   12, "sortBy": "title", "sortOrder": "asc" } }
    * @return
    *   200 { "movies": [ { "id": "tt1375666", "title": "Inception", "year": 2010, "director": "Christopher Nolan",
    *   "rating": 8.8, "genres": [ { "id": 19, "text": "Sci-Fi" }, { "id": 3, "text": "Adventure" } ], "stars": [ {
    *   "starID": "nm0000138", "name": "Leonardo DiCaprio" }, ... ] }, ... ], "totalCount": 42 }
    */
  def search() = Action { implicit request =>
    NotImplemented(Json.obj("message" -> "not implemented yet"))
  }

  /** Get movie details
    *
    * Logic:
    *   - Retrieves full information about a movie by ID
    *
    * @param movieID
    *   The unique movie ID
    * @request
    *   GET /api/v1/movie/movie/:movieID
    * @return
    *   200 { "id": "tt1375666", "title": "Inception", "year": 2010, "director": "Christopher Nolan", "rating": 8.8,
    *   "genres": [ { "id": 19, "text": "Sci-Fi" }, ... ], "stars": [ { "starID": "nm0000138", "name": "Leonardo
    *   DiCaprio" }, ... ] } 404 { "success": false, "error": "Movie not found" }
    */
  def movieDetail(movieID: String) = Action { implicit request =>
    NotImplemented(Json.obj("message" -> "not implemented yet"))
  }

  /** Get genres
    *
    * Logic:
    *   - Returns all genres
    *
    * @request
    *   GET /api/v1/movie/genres
    * @return
    *   200 [ { "id": 5, "text": "Biography" }, ... ]
    */
  def getGenres() = Action { implicit request =>
    NotImplemented(Json.obj("message" -> "not implemented yet"))
  }

  /** Get movies by genre
    *
    * Logic:
    *   - Returns a paginated, sorted page of movies tagged with a given genre, and the total match count
    *
    * @param genre
    *   Genre ID
    * @request
    *   GET /api/v1/movie/genre/:genre?page=1&pageSize=12&sortBy=title&sortOrder=asc
    * @return
    *   200 { "movies": [ { "id": "tt1375666", "title": "Inception", "year": 2010, "director": "Christopher Nolan",
    *   "rating": 8.8, "genres": [ { "id": 19, "text": "Sci-Fi" }, ... ], "stars": [ { "starID": "nm0000138", "name":
    *   "Leonardo DiCaprio" }, ... ] }, ... ], "totalCount": 42 }
    */
  def moviesByGenre(genre: String) = Action { implicit request =>
    NotImplemented(Json.obj("message" -> "not implemented yet"))
  }

  /** Get movies by title (alphabet)
    *
    * Logic:
    *   - Returns a paginated, sorted page of movies whose title starts with a given letter/prefix, and the total match
    *     count
    *
    * @param title
    *   Title prefix (e.g. a single letter)
    * @request
    *   GET /api/v1/movie/title/:title?page=1&pageSize=12&sortBy=title&sortOrder=asc
    * @return
    *   200 { "movies": [ { "id": "tt1375666", "title": "Inception", "year": 2010, "director": "Christopher Nolan",
    *   "rating": 8.8, "genres": [ { "id": 19, "text": "Sci-Fi" }, ... ], "stars": [ { "starID": "nm0000138", "name":
    *   "Leonardo DiCaprio" }, ... ] }, ... ], "totalCount": 42 }
    */
  def moviesByTitle(title: String) = Action { implicit request =>
    NotImplemented(Json.obj("message" -> "not implemented yet"))
  }

  /** Get star details
    *
    * Logic:
    *   - Returns information about a star including filmography
    *
    * @param starID
    *   The unique star ID
    * @request
    *   GET /api/v1/movie/star/:starID
    * @return
    *   200 { "id": "nm0000138", "name": "Leonardo DiCaprio", "birthYear": 1974, "movies": [ { "id": "tt1375666",
    *   "title": "Inception" }, ... ] } 404 { "error": "Star not found" }
    */
  def starDetail(starID: String) = Action { implicit request =>
    NotImplemented(Json.obj("message" -> "not implemented yet"))
  }

  /** Full-text search on movie titles
    *
    * Logic:
    *   - Accepts a free-text query string
    *   - Returns movies whose title matches the query
    *
    * @request
    *   GET /api/v1/movie/fulltext?q=inception&page=1&pageSize=12
    * @return
    *   200 { "movies": [ { "id": "tt1375666", "title": "Inception", "year": 2010, "director": "Christopher Nolan",
    *   "rating": 8.8, "genres": [ { "id": 19, "text": "Sci-Fi" }, ... ], "stars": [ { "starID": "nm0000138", "name":
    *   "Leonardo DiCaprio" }, ... ] }, ... ], "totalCount": 3 } 400 { "error": "Query is required" }
    */
  def fullTextSearch() = Action { implicit request =>
    NotImplemented(Json.obj("message" -> "not implemented yet"))
  }

  /** Autocomplete movie title suggestions
    *
    * Logic:
    *   - Accepts a partial query string
    *   - Returns up to 10 (id, title) suggestions
    *
    * @request
    *   GET /api/v1/movie/autocomplete?q=inc
    * @return
    *   200 [] — query is shorter than 3 characters 200 [ { "id": "tt1375666", "title": "Inception" }, ... ] — up to 10
    *   matches, when query is 3+ characters
    */
  def autocomplete() = Action { implicit request =>
    NotImplemented(Json.obj("message" -> "not implemented yet"))
  }
}
