package controllers

import javax.inject._
import play.api.mvc._
import play.api.libs.json._
import models.CartModel

/** Controller for cart actions: view, add, remove, clear, and checkout. */
@Singleton
class CartController @Inject() (
  val controllerComponents: ControllerComponents,
  cartModel: CartModel
) extends BaseController {

  /** View cart contents
    *
    * Logic:
    *   - Returns the current cart's contents
    *
    * @request
    *   GET /api/v1/cart
    * @return
    *   200 { "cart": [ { "movieId": "tt1375666", "title": "Inception" }, ... ] }
    */
  def view() = Action { implicit request =>
    NotImplemented(Json.obj("message" -> "not implemented yet"))
  }

  /** Add item to cart
    *
    * Logic:
    *   - Adds a movie to the cart
    *
    * @request
    *   POST /api/v1/cart
    * @body
    *   { "movieId": "tt1375666"}
    * @return
    *   200 { "message": "Movie added to cart" }
    */
  def add() = Action { implicit request =>
    NotImplemented(Json.obj("message" -> "not implemented yet"))
  }

  /** Delete movie from cart
    *
    * Logic:
    *   - Removes the movie from the cart
    *
    * @param movieID
    *   Movie to remove
    * @request
    *   DELETE /api/v1/cart/:movieID
    * @return
    *   200 { "message": "Movie removed from cart" }
    */
  def delete(movieID: String) = Action { implicit request =>
    NotImplemented(Json.obj("message" -> "not implemented yet"))
  }

  /** Clear cart
    *
    * Logic:
    *   - Removes all items from the cart
    *
    * @request
    *   DELETE /api/v1/cart
    * @return
    *   200 { "message": "Cart cleared successfully" }
    */
  def clear() = Action { implicit request =>
    NotImplemented(Json.obj("message" -> "not implemented yet"))
  }

  /** Checkout
    *
    * Logic:
    *   - Validates the given payment information
    *   - Records a sale for each cart item and clears the cart on success
    *
    * @request
    *   POST /api/v1/cart/checkout
    * @body
    *   { "customerId": 1, "firstName": "John", "lastName": "Doe", "cardNumber": "4111111111111111", "expiration":
    *   "2027-01-01", "items": [ "tt1375666", "tt0468569" ] }
    * @return
    *   200 { "message": "Checkout successful" } 400 { "success": false, "error": "Invalid payment information" }
    */
  def checkout() = Action { implicit request =>
    NotImplemented(Json.obj("message" -> "not implemented yet"))
  }

  // --------------------------------------HELPER FUNCTIONS-------------------------------------------------------

  /** Reads the cart's current contents. */
  private def readCart(request: RequestHeader): List[String] =
    throw new NotImplementedError("not implemented yet")

  /** Serializes the cart's contents for storage. */
  private def writeCart(items: List[String]): String =
    throw new NotImplementedError("not implemented yet")
}
