//function to retrieve sermon data from Sanity
import { getSermons } from "../../sanity/lib/queries";


//converts regular youtube urls into embed urls to display in iframe
function getYouTubeEmbedUrl(url) {
    if (!url) return "";

    let videoId = "";

    //standard youtube url
    if (url.includes("watch?v=")) {
        //gets the video ID from the url
        videoId = url.split("watch?v=")[1].split("&")[0];
    }

    //short youtube url
    else if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1].split("?")[0];
    }

    //returns the correct format url
    return `https://www.youtube.com/embed/${videoId}`;

}


//main component for sermon page
export default async function Sermon() {

    //fetches all sermons from Sanity
    const sermons = await getSermons();

    return (
        <div className="page-content">
            <h1 className="page-title">Sermon Archive</h1>

            {/*grid container for sermon cards*/}
            <div className="sermon-grid">

                {/*loops through sermons and creates a card*/}
                {sermons.map((sermon) => {
                    const embedUrl = 
                        getYouTubeEmbedUrl(sermon.videoUrl);

                    return (
                        //sermon card
                        <div
                            className="sermon-card"
                            key={sermon.id}
                        >

                            {embedUrl && (
                                <iframe
                                    src={embedUrl}
                                    title={sermon.title}
                                    allowFullScreen
                                    //allow the playback features
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                />
                            )}

                            <h3>{sermon.title}</h3>

                            <p>
                                {new Date(
                                    sermon.Date
                                ).toLocaleDateString(
                                    "en-US",
                                    {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    }
                                )}
                            </p>

                            <p className="sermon-speaker">
                                {sermon.speaker}
                            </p>

                            <p className="sermon-description">
                                {sermon.description}
                            </p>
                    </div>
                    );
                })}
            </div>
        </div>
    );
}

