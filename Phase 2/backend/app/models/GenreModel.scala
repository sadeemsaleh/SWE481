package models

import javax.inject.{Inject, Singleton}
import org.jooq.DSLContext
import models.generated.tables.pojos.Genres

@Singleton
class GenreModel @Inject() (dsl: DSLContext) {

  /** Returns every genre in the database. */
  def all(): List[Genres] =
    throw new NotImplementedError("not implemented yet")
}
