import io.netty.handler.codec.http.HttpHeaders
import zio.*
import zio.http.*
import zio.http.Path.Segment
import zio.http.middleware.Auth.Credentials
import zio.http.model.headers.values.Authorization
import zio.http.model.headers.values.Via.ReceivedProtocol.Version
import zio.http.model.{Header, HeaderValues, Headers, Method}

object HttpNotionApi extends ZIOAppDefault:

    val id = "82dc8f768b12406a918c74d71d59a631"
    val url = s"https://api.notion.com/v1/databases/$id/query"
    val headers = Headers.authorization("secret_EZUQxCoJNSQNVDm5zef6wd3XVtyo10WuuWhuwHzDQCV")
        .addHeader("Notion-Version", "2022-06-28")
        .withAccept(HeaderValues.applicationJson)

    val app =
        for
            res <- Client.request(url, headers = headers)
            data <- res.body.asString
            _ <- Console.printLine(data)
        yield ()

    def run = app.provide(Client.default)