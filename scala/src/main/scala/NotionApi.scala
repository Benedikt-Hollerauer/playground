import notion.api.v1.*

import scala.util.{Failure, Success, Try}

object NotionApi extends App:

	val client = Try(
		NotionClient("secret_QbXZdGvaEWNw7LJcMvavDk9acBqyXXEgiIltsuTsT1i")
			.retrieveDatabase("0a1bfb4049dc4bc4b9d302ecbc47dd53")
	)

	client match
		case Failure(exception) => println(exception.toString)
		case Success(value) => println(value)