package controllers

import javax.inject._
import play.api.mvc._
import play.api.libs.json._
import models.UserModel

/** Controller for user account actions: login, logout, session check. */
@Singleton
class UserController @Inject() (
  val controllerComponents: ControllerComponents,
  userModel: UserModel
) extends BaseController {

  /** User login
    *
    * Logic:
    *   - Accepts email and password
    *   - Validates credentials against the database
    *
    * @request
    *   POST /api/v1/user/login
    * @body
    *   { "email": "user@example.com", "password": "123456" }
    * @return
    *   200 { "id": 1, "firstname": "John", "lastname": "Doe", "email": "user@example.com" } 401 { "success": false,
    *   "error": "Invalid email or password" }
    */
  def login() = Action { implicit request =>
    NotImplemented(Json.obj("message" -> "not implemented yet"))
  }

  /** User logout
    *
    * Logic:
    *   - Ends the current user's authenticated state
    *
    * @request
    *   POST /api/v1/user/logout
    * @return
    *   200 { "success": true, "message": "Logged out successfully" }
    */
  def logout() = Action { implicit request =>
    NotImplemented(Json.obj("message" -> "not implemented yet"))
  }

  /** Authenticate user session
    *
    * Logic:
    *   - Checks whether the current request is authenticated
    *   - Used on app startup to restore login state
    *
    * @request
    *   GET /api/v1/user/authenticate
    * @return
    *   200 { "id": 1, "email": "user@example.com" } 401 { "success": false, "error": "Not authenticated" }
    */
  def authenticate() = Action { implicit request =>
    NotImplemented(Json.obj("message" -> "not implemented yet"))
  }
}
