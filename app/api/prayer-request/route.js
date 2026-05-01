import { serverClient } from "../../../sanity/lib/server";

//POST requests
export async function POST(req) {
    console.log("TOKEN EXISTS:", !!process.env.SANITY_API_WRITE_TOKEN);

    try {
        const body = await req.json();

        //create new prayer request document
        const doc = {
            _type: "prayerRequest",
            name: body.name,
            email: body.email,
            request: body.request,
            isPublic: body.isPublic,
        };

        //sends document to Sanity, creates new entry
        const result = await serverClient.create(doc);

        return Response.json({ success: true, result });
        
    } catch (error) {
        return Response.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}