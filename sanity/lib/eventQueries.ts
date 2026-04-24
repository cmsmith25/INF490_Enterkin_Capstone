import { client } from "./client";

export async function getEvents() {
    return await client.fetch(`
        *[_type == "event"] | order(date asc) {
        _id,
        title,
        date,
        time, 
        description
        }
    `);
    }