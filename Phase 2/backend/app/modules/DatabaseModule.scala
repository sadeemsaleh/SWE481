package modules

import com.google.inject.{AbstractModule, Provides, Singleton}
import org.jooq.{DSLContext, SQLDialect}
import org.jooq.impl.DSL
import play.api.db.Database

class DatabaseModule extends AbstractModule {
  override def configure(): Unit = ()

  @Provides @Singleton
  def provideDSLContext(db: Database): DSLContext =
    DSL.using(db.getConnection(), SQLDialect.POSTGRES)
}
