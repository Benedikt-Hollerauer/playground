lazy val root = (project in file("."))
    .settings(
        name := "scala",
        scalaVersion := "3.2.1",
        libraryDependencies ++= notionApi
    )

val notionApi = Seq(
    "com.github.seratch" % "notion-sdk-jvm-core" % "1.7.2"
)