require("dotenv").config({ path: "./.env" })
import express, { Request, Response } from "express"
import { createSale, queryDatabase, retrieveDatabase, Sale, SaleIds } from "./notionApi"

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send("Hello World")
})

const saleIds: SaleIds = new SaleIds(
    process.env.NOTION_DATABASE_ID as string,
    process.env.TITLE_ID as string
)

const sale: Sale = new Sale(
    "test"
)

createSale(saleIds, sale).then(x => console.log(x))

console.log("go to: http://localhost:8080/")

app.listen(process.env.PORT)