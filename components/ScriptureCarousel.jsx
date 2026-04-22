"use client";

import { useState, useEffect } from "react";

export default function ScriptureCarousel() {
    const scriptures = [
        {
            text: "For I know the plans I have for your, declares the Lord.",
            reference: "Jeremiah 29:11"
        },

        {
            text: "The Lord is my shepherd; I shall not want.",
            reference: "Psalm 23:1"
        },

        {
            text: "I can do all things through Christ who strengthens me.",
            reference: "Phillipians 4:13"
        },

        {
            text: "Be strong and courageous. Do not be afraid.",
            reference: "Joshua 1:9"
        },

        {
            text: "Fear not, for I am with you; be not dismayed, for I am your God.",
            reference: "Isaiah 41:10"
        }

    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setIndex((prev) =>
                prev === scriptures.length - 1 ? 0 : prev + 1
        );
        }, 8000); //will change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="scripture-section">
            <div className="scripture-box">
                <p className="scripture-text">
                    "{scriptures[index].text}"
                </p>

                <p className="scripture-reference">
                    {scriptures[index].reference}
                </p>
            </div>
        </section>
    );
}