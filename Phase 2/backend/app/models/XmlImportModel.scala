package models

import javax.inject.{Inject, Singleton}
import org.jooq.DSLContext
import scala.collection.mutable

@Singleton
class XmlImportModel @Inject() (dsl: DSLContext) {

  /** Loads the set of every movie ID currently in the database, used to detect duplicates during XML import. */
  def loadExistingMovieIds(): Set[String] =
    throw new NotImplementedError("not implemented yet")

  /** Loads a mapping of existing genre names to their IDs, used to avoid inserting duplicate genres during import. */
  def loadExistingGenres(): mutable.Map[String, Int] =
    throw new NotImplementedError("not implemented yet")

  /** Loads a mapping of existing star names to their IDs, used to avoid inserting duplicate stars during import. */
  def loadExistingStars(): mutable.Map[String, String] =
    throw new NotImplementedError("not implemented yet")

  /** Inserts a new movie row into the database. */
  def insertMovie(id: String, title: String, year: Int, director: String): Unit =
    throw new NotImplementedError("not implemented yet")

  /** Inserts a new genre and returns its generated ID. */
  def insertGenre(name: String): Int =
    throw new NotImplementedError("not implemented yet")

  /** Creates a genre-to-movie association, ignoring duplicate-key errors. */
  def linkGenreToMovie(genreId: Int, movieId: String): Unit =
    throw new NotImplementedError("not implemented yet")

  /** Inserts a new star, optionally including a birth year. */
  def insertStar(id: String, name: String, birthYear: Option[Int]): Unit =
    throw new NotImplementedError("not implemented yet")

  /** Creates a star-to-movie association, ignoring duplicate-key errors. */
  def linkStarToMovie(starId: String, movieId: String): Unit =
    throw new NotImplementedError("not implemented yet")
}
