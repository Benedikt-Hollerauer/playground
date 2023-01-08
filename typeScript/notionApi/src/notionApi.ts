import { Client } from "@notionhq/client"
import { CreatePageResponse, GetDatabaseResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints"

const notion = new Client({auth: process.env.NOTION_API_KEY})

export class SaleIds {

    databaseId: string
    titleId: string

    constructor(
        databaseId: string,
        titleId: string
    ) {
        this.databaseId = databaseId
        this.titleId = titleId
    }
}

export class Sale {

    title: string
    
    constructor(
        title: string
    ) {
        this.title = title
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
            }
        }    
    })
}