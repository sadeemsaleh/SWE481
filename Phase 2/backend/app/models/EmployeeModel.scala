package models

import javax.inject.{Inject, Singleton}
import org.jooq.DSLContext

/** An employee account, as returned by credential lookup. */
case class Employee(email: String, fullname: String)

@Singleton
class EmployeeModel @Inject() (dsl: DSLContext) {

  /** Looks up an employee by email and password, returning None if no employee matches both. */
  def authenticate(email: String, password: String): Option[Employee] =
    throw new NotImplementedError("not implemented yet")

  /** Inserts a new star with a generated ID, optionally including a birth year, and returns the new star's ID. */
  def insertStar(name: String, birthYear: Option[Int]): String =
    throw new NotImplementedError("not implemented yet")

  /** Returns the database schema (table name, column name, data type) for every column in the public schema, used to
    * populate dashboard form metadata.
    */
  def getMetadata(): List[Map[String, String]] =
    throw new NotImplementedError("not implemented yet")

  /** Inserts a new movie along with a single genre and star, creating the genre and/or star first if they don't already
    * exist by name, and returns the new movie's ID.
    */
  def addMovie(
    title: String,
    year: Int,
    director: String,
    starName: String,
    genreName: String
  ): String =
    throw new NotImplementedError("not implemented yet")
}
