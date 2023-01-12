import { Client } from "@notionhq/client"
import { CreatePageResponse, GetDatabaseResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints"

const notion = new Client({auth: process.env.NOTION_API_KEY as string})

export enum Platform {
    Private,
    EbayClassifieds
}

export class SaleIds {

    databaseId: string
    titleId: string
    descriptionId: string
    sellingPriceId: string
    sellingCostsId: string
    dateId: string
    platformId: string
    
    constructor(
        databaseId: string,
        titleId: string,
        descriptionId: string,
        sellingPriceId: string,
        sellingCostsId: string,
        dateId: string,
        platformId: string
    ) {
        this.databaseId = databaseId
        this.titleId = titleId
        this.descriptionId = descriptionId
        this.sellingPriceId = sellingPriceId
        this.sellingCostsId = sellingCostsId
        this.dateId = dateId
        this.platformId = platformId
    }
}

export class Sale {

    title: string
    description: string
    sellingPrice: number
    sellingCosts: number
    date: Date
    platform: Platform
    
    constructor(
        title: string,
        description: string,
        sellingPrice: number,
        sellingCosts: number,
        date: Date,
        platform: Platform
    ) {
        this.title = title
        this.description = description
        this.sellingPrice = sellingPrice
        this.sellingCosts = sellingCosts
        this.date = date
        this.platform = platform
    }
}

export async function retrieveDatabase(databaseId: string): Promise<GetDatabaseResponse> {
    return await notion.databases.retrieve({
        database_id: databaseId
    })
}

export async function queryDatabase(databaseId: string): Promise<QueryDatabaseResponse> {
    return await notion.databases.query({
        database_id: databaseId
    })
}

export async function createSale(saleIds: SaleIds, sale: Sale): Promise<CreatePageResponse> {
    return await notion.pages.create({
        parent: {
            database_id: saleIds.databaseId
        },
        properties: {
            [saleIds.titleId]: {
                title: [
                    {
                        type: "text",
                        text: {
                            content: sale.title,
                        }
                    }
                ]
            },
            [saleIds.descriptionId]: {
                rich_text: [
                    {
                        type: "text",
                        text: {
                            content: sale.description
                        }
                    }
                ]
            },
            [saleIds.sellingPriceId]: {
                number: sale.sellingPrice 
            },
            [saleIds.sellingCostsId]: {
                number: sale.sellingCosts
            },
            [saleIds.dateId]: {
                date: {
                    start: sale.date.toISOString()
                }
            },
            [saleIds.platformId]: {
                select: {
                    
                }
            }
        }    
    })
}