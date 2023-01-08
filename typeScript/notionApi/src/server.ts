require("dotenv").config({ path: "./.env" })
import express, { Request, Response } from "express"
import { retrieveDatabase } from "./notionApi"

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send("Hello World")
})

console.log("go to: http://localhost:8080/")

app.listen(process.env.PORT)

const databaseId: string = process.env.NOTION_DATABASE_ID as string

console.log(retrieveDatabase(databaseId))