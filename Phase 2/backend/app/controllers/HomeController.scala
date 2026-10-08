package controllers

import javax.inject._
import play.api.mvc._
import play.api.libs.json._

/** Controller serving a quick reference of every available API endpoint. */
@Singleton
class HomeController @Inject() (val controllerComponents: ControllerComponents) extends BaseController {

  /** API endpoint reference
    *
    * Logic:
    *   - Returns a static list of every available endpoint, with method, path, and a short description
    *   - Serves both / and /api
    *
    * @request
    *   GET / or GET /api
    * @return
    *   200 { "message": "Fabflix API", "endpoints": [ { "method": "POST", "path": "/api/v1/user/login", "description":
    *   "..." }, ... ] }
    */
  def index() = Action {
    Ok(
      Json.obj(
        "message" -> "Fabflix API",
        "endpoints" -> Json.arr(
          Json.obj("method" -> "POST", "path" -> "/api/v1/user/login", "description"  -> "Log a user in"),
          Json.obj("method" -> "POST", "path" -> "/api/v1/user/logout", "description" -> "Log the current user out"),
          Json.obj(
            "method"      -> "GET",
            "path"        -> "/api/v1/user/authenticate",
            "description" -> "Check authentication status"
          ),
          Json.obj(
            "method"      -> "POST",
            "path"        -> "/api/v1/movie/search",
            "description" -> "Search movies by title/director/year/star"
          ),
          Json.obj(
            "method"      -> "GET",
            "path"        -> "/api/v1/movie/movie/:movieID",
            "description" -> "Get full detail for a single movie"
          ),
          Json.obj("method" -> "GET", "path" -> "/api/v1/movie/genres", "description" -> "List all genres"),
          Json
            .obj("method" -> "GET", "path" -> "/api/v1/movie/genre/:genre", "description" -> "List movies in a genre"),
          Json.obj(
            "method"      -> "GET",
            "path"        -> "/api/v1/movie/title/:title",
            "description" -> "List movies whose title starts with a given letter/prefix"
          ),
          Json.obj(
            "method"      -> "GET",
            "path"        -> "/api/v1/movie/star/:starID",
            "description" -> "Get detail and filmography for a star"
          ),
          Json.obj(
            "method"      -> "GET",
            "path"        -> "/api/v1/movie/fulltext",
            "description" -> "Full-text search on movie titles"
          ),
          Json.obj(
            "method"      -> "GET",
            "path"        -> "/api/v1/movie/autocomplete",
            "description" -> "Title autocomplete suggestions"
          ),
          Json.obj("method" -> "GET", "path"  -> "/api/v1/cart", "description"          -> "View the current cart"),
          Json.obj("method" -> "POST", "path" -> "/api/v1/cart", "description"          -> "Add a movie to the cart"),
          Json.obj("method" -> "POST", "path" -> "/api/v1/cart/checkout", "description" -> "Checkout the cart"),
          Json.obj(
            "method"      -> "DELETE",
            "path"        -> "/api/v1/cart/:movieID",
            "description" -> "Remove a movie from the cart"
          ),
          Json.obj("method" -> "DELETE", "path" -> "/api/v1/cart", "description" -> "Clear the cart"),
          Json
            .obj("method" -> "POST", "path" -> "/api/v1/dashboard/login", "description" -> "Employee dashboard login"),
          Json.obj(
            "method"      -> "POST",
            "path"        -> "/api/v1/dashboard/logout",
            "description" -> "Employee dashboard logout"
          ),
          Json.obj(
            "method"      -> "GET",
            "path"        -> "/api/v1/dashboard/authenticate",
            "description" -> "Check employee authentication status"
          ),
          Json.obj("method" -> "POST", "path" -> "/api/v1/dashboard/star", "description" -> "Insert a new star"),
          Json.obj(
            "method"      -> "GET",
            "path"        -> "/api/v1/dashboard/metadata",
            "description" -> "Get metadata used by dashboard forms"
          ),
          Json.obj("method" -> "POST", "path" -> "/api/v1/dashboard/movie", "description" -> "Add a new movie"),
          Json.obj(
            "method"      -> "POST",
            "path"        -> "/api/v1/dashboard/import",
            "description" -> "Bulk-import movies from XML"
          )
        )
      )
    )
  }
}
