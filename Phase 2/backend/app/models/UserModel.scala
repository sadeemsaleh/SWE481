package models

import javax.inject.{Inject, Singleton}
import org.jooq.DSLContext

/** A customer account, as returned by credential lookup. */
case class User(id: Int, firstname: String, lastname: String, email: String)

@Singleton
class UserModel @Inject() (dsl: DSLContext) {

  /** Looks up a customer by email and password, returning None if no row matches both. */
  def findByCredentials(email: String, password: String): Option[User] =
    throw new NotImplementedError("not implemented yet")
}
