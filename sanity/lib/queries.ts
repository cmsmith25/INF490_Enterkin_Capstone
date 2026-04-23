import { client } from "./client";

export async function getSermons() {
    return await client.fetch(`
        *[_type == "sermon"] | order(date desc) {
        _id,
        title,
        date,
        videoUrl,
        description,
        speaker
        }
    `);
    }

export async function getLatestSermon() {
    return await client.fetch(`
        *[_type == "sermon"] | order(date desc)[0] {
        _id,
        title,
        date,
        videoUrl,
        description,
        speaker
    }
`);
    }
