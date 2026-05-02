"use client";
import { useState, useEffect } from "react";
import { client } from "../sanity/lib/client";



export default function ThemeVerse() {
    //stores the theme verse from SAnity
    const [verseData, setVerseData] = useState(null);

    useEffect (() => {
        //fetch the theme verse from Sanity
        const fetchVerse = async () => {
            try {
                const data = await client.fetch(`
                    *[_type == "themeVerse"][0]
                `); //fetch only the first document

                setVerseData(data);
            } catch (error) {
                console.error("Error fetching theme verse:", error);
            }
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