"use client";
import { useEffect } from "react";
import { client } from "../sanity/lib/client";


export default function Message() {
    const [verseData, setVerseData] = useState(null);

    useEffect (() => {
        const fetchVerse = async () => {
            const data = await client.fetch(`
                *[_type == "themeVerse"][0]
            `);

            setVerseData(data);
        };

        fetchVerse();
    }, []);


    return (
        <section className="message">

            <div className="divider">
                <span>Theme Verse</span>
            </div>

            {verseData ? (
                <>
                    <p className="italic text-lg">"{verseData.verse}"</p>
                    <p className="mt-2 font-semibold">{verseData.reference}</p>
                </>
            ):(
                <p>Loading...</p>
            )}
        </section>

    );
}