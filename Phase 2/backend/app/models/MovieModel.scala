package models

import javax.inject.{Inject, Singleton}
import org.jooq.DSLContext

/** A single genre, as attached to a movie. */
case class GenreSummary(id: Int, text: String)

/** A single cast member, as attached to a movie. */
case class StarSummary(starID: String, name: String)

/** A movie's full detail: core fields plus its rating, genres, and cast. */
case class MovieDetail(
  id: String,
  title: String,
  year: Int,
  director: String,
  rating: Double,
  genres: List[GenreSummary],
  stars: List[StarSummary]
)

@Singleton
class MovieModel @Inject() (dsl: DSLContext) {

  /** Looks up a movie by ID, including its rating, genres, and cast, returning None if no movie has that ID. */
  def findById(movieId: String): Option[MovieDetail] =
    throw new NotImplementedError("not implemented yet")

  /** Counts how many movies are tagged with a given genre. */
  def countByGenre(genreId: Int): Int =
    throw new NotImplementedError("not implemented yet")

  /** Returns full detail for every movie tagged with a given genre. */
  def findByGenre(genreId: Int): List[MovieDetail] =
    throw new NotImplementedError("not implemented yet")

  /** Returns a paginated, sorted page of movies tagged with a given genre. Genres and stars for the whole page are
    * batched into a fixed number of queries regardless of page size, rather than queried once per movie.
    */
  def findByGenreOptimized(
    genreId: Int,
    page: Int = 1,
    pageSize: Int = 12,
    sortBy: String = "title",
    sortOrder: String = "asc"
  ): List[MovieDetail] =
    throw new NotImplementedError("not implemented yet")

  /** Returns full detail for every movie whose title starts with a given letter/prefix. */
  def findByTitle(letter: String): List[MovieDetail] =
    throw new NotImplementedError("not implemented yet")

  /** Counts how many movies have a title starting with a given letter/prefix. */
  def countByTitle(letter: String): Int =
    throw new NotImplementedError("not implemented yet")

  /** Returns a paginated, sorted page of movies whose title starts with a given letter/prefix, batched the same way as
    * findByGenreOptimized.
    */
  def findByTitleOptimized(
    letter: String,
    page: Int = 1,
    pageSize: Int = 12,
    sortBy: String = "title",
    sortOrder: String = "asc"
  ): List[MovieDetail] =
    throw new NotImplementedError("not implemented yet")

  /** Returns a paginated, sorted page of movies matching any combination of title/year/director/star filters. Any
    * filter left empty/None is ignored.
    */
  def search(
    title: String,
    year: Option[Int],
    director: String,
    star: String,
    page: Int = 1,
    pageSize: Int = 12,
    sortBy: String = "title",
    sortOrder: String = "asc"
  ): List[MovieDetail] =
    throw new NotImplementedError("not implemented yet")

  /** Counts how many movies match the same filters as search, ignoring pagination. */
  def countSearch(title: String, year: Option[Int], director: String, star: String): Int =
    throw new NotImplementedError("not implemented yet")

  /** Returns a paginated page of movies whose title matches a full-text search query. */
  def fullTextSearch(query: String, page: Int = 1, pageSize: Int = 12): List[MovieDetail] =
    throw new NotImplementedError("not implemented yet")

  /** Counts how many movies match a full-text search query. */
  def countFullTextSearch(query: String): Int =
    throw new NotImplementedError("not implemented yet")

  /** Returns up to 10 (id, title) pairs for movies matching a full-text search query, for autocomplete suggestions. */
  def autocomplete(query: String): List[(String, String)] =
    throw new NotImplementedError("not implemented yet")
}
