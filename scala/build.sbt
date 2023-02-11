lazy val root = (project in file("."))
    .settings(
        name := "scala",
        scalaVersion := "3.2.2",
        libraryDependencies ++= Seq(
            notionApi,
            zio
        ).flatten
    )

val notionApi = Seq(
    "com.github.seratch" % "notion-sdk-jvm-core" % "1.7.2"
)

val zioVersion = "2.0.8"
val zioHttpVersion = "0.0.4"

val zio = Seq(
    "dev.zio" %% "zio" % zioVersion,
    "dev.zio" %% "zio-http" % zioHttpVersion,
)