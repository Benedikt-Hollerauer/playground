require("dotenv").config({ path: "./.env" })
import express, { Request, Response } from "express"
import { createSale, Platform, queryDatabase, retrieveDatabase, Sale, SaleIds, test } from "./notionApi"

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

// createSale(saleIds, sale).then(x => console.log(x))

const platformId = process.env.PLATFORM_ID as string

retrieveDatabase(saleIds.databaseId).then(x => test(x)[platformId])

console.log("go to: http://localhost:8080/")

app.listen(process.env.PORT)