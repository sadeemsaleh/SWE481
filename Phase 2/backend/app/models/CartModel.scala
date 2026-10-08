package models

import javax.inject.{Inject, Singleton}
import org.jooq.DSLContext

@Singleton
class CartModel @Inject() (dsl: DSLContext) {

  /** Validates that a credit card matching the given number/name/expiration exists. Returns false if the card doesn't
    * exist.
    */
  def validateCard(
    customerId: Int,
    firstName: String,
    lastName: String,
    cardNumber: String,
    expiration: String
  ): Boolean =
    throw new NotImplementedError("not implemented yet")

  /** Records one sale row per cart item, associated with the given customer. */
  def recordSales(customerId: Int, items: List[String]): Unit =
    throw new NotImplementedError("not implemented yet")
}
