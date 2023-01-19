require("dotenv").config({ path: "./.env" })
import express, { Request, Response } from "express"
import { createSale, Platform, queryDatabase, retrieveDatabase, Sale, SaleIds, getTags } from "./notionApi"

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send("Hello World")
})

const saleIds: SaleIds = new SaleIds(
    process.env.NOTION_DATABASE_ID as string,
    process.env.TITLE_ID as string,
    process.env.DESCRIPTION_ID as string,
    process.env.SELLING_PRICE_ID as string,
    process.env.SELLING_COSTS_ID as string,
    process.env.DATE_ID as string,
    process.env.PLATFROM_ID as string
)

const sale: Sale = new Sale(
    "title",
    "description",
    1.1,
    2.2,
    new Date(),
    Platform.EbayClassifieds
)

createSale(saleIds, sale).then(x => console.log(x))

retrieveDatabase(saleIds.databaseId).then(x =>
    console.log(getTags(x))
)

console.log("go to: http://localhost:8080/")

app.listen(process.env.PORT)