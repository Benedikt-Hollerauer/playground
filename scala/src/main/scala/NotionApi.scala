import notion.api.v1.*
import notion.api.v1.model.databases.DatabaseProperty.RichText
import notion.api.v1.model.pages.PageProperty
import notion.api.v1.request.databases.UpdateDatabaseRequest

import scala.util.{Failure, Success, Try}

object NotionApi extends App:

	val client = NotionClient("secret_QbXZdGvaEWNw7LJcMvavDk9acBqyXXEgiIltsuTsT1i")

	val querySalesMonitoring = Try(
		client.queryDatabase("0a1bfb4049dc4bc4b9d302ecbc47dd53", null, null, null, null)
	)

	querySalesMonitoring match
		case Failure(exception) => println(exception.toString)
		case Success(value) =>
			(1 to 10).foreach(println)
			println(value)
			(1 to 10).foreach(println)