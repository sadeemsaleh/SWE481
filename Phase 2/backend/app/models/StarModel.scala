package models

import javax.inject.{Inject, Singleton}
import org.jooq.DSLContext

/** A single movie a star appeared in, as listed within their filmography. */
case class MovieSummary(id: String, title: String)

/** A star's full detail, including their complete filmography. */
case class StarDetail(
  id: String,
  name: String,
  birthYear: Option[Int],
  movies: List[MovieSummary]
)

@Singleton
class StarModel @Inject() (dsl: DSLContext) {

  /** Looks up a star by ID, including their full filmography, returning None if no star has that ID. */
  def findById(starId: String): Option[StarDetail] =
    throw new NotImplementedError("not implemented yet")
}
