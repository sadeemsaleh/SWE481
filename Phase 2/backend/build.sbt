name         := """backend"""
organization := "ksu.edu.sa"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.13.18"

libraryDependencies += guice
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "7.0.2" % Test
libraryDependencies ++= Seq(
  "org.jooq"       % "jooq"         % "3.16.23",
  "org.jooq"       % "jooq-codegen" % "3.16.23",
  "org.jooq"       % "jooq-meta"    % "3.16.23",
  "org.postgresql" % "postgresql"   % "42.7.3"
)

libraryDependencies += jdbc

lazy val jooqCodegen = taskKey[Unit]("Run jOOQ codegen")

jooqCodegen := {
  val cp   = (Compile / dependencyClasspath).value.files
  val base = baseDirectory.value.getAbsolutePath
  val loader = new java.net.URLClassLoader(
    cp.map(_.toURI.toURL).toArray,
    ClassLoader.getSystemClassLoader
  )

  val appConf = com.typesafe.config.ConfigFactory
    .parseFile(new java.io.File(s"$base/conf/application.conf"))
    .resolve()

  def confOrDefault(path: String, default: String): String =
    if (appConf.hasPath(path)) appConf.getString(path) else default

  val dbUrl      = confOrDefault("db.default.url", "jdbc:postgresql://localhost:5432/moviedb")
  val dbUser     = confOrDefault("db.default.username", "postgres")
  val dbPassword = confOrDefault("db.default.password", "postgres")

  val xml = s"""
    <configuration>
      <jdbc>
        <driver>org.postgresql.Driver</driver>
        <url>$dbUrl</url>
        <user>$dbUser</user>
        <password>$dbPassword</password>
      </jdbc>
      <generator>
        <generate>
          <pojos>true</pojos>
        </generate>
        <database>
          <name>org.jooq.meta.postgres.PostgresDatabase</name>
          <inputSchema>public</inputSchema>
          <includes>.*</includes>
        </database>
        <target>
          <packageName>models.generated</packageName>
          <directory>$base/app</directory>
        </target>
      </generator>
    </configuration>
  """
  val genClass = loader.loadClass("org.jooq.codegen.GenerationTool")
  val method   = genClass.getMethod("generate", classOf[String])
  method.invoke(null, xml)
}
