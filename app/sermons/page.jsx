import { getSermons } from "../../sanity/lib/queries";

export default async function Sermon() {

    const sermons = await getSermons();

    return (
        <div className="page-content">
            <h1 className="page-title">Sermon Archive</h1>

            <div className="sermon-grid">

                {sermons.map((sermon) => {

                    //Converts youtube URL
                    function getYouTubeEmbedUrl(url) {
                        if (!url) return "";

                        let videoId = "";

                        //Standard YouTube URL
                        if (url.includes("watch?v=")) {
                            videoId = url.split("watch?v=")[1].split("&") [0];
                        }

                        //Short YouTube URL
                        if (url.includes("youtu.be/")) {
                            videoId = url.split("watch?v=")[1].split("&")[0];
                        }

                        return `http://www.youtube.com/embed/${videoId}`;
                    }

                    const embedUrl = getYouTubeEmbedUrl(sermon.videoUrl);

                    return (
                        <div className="sermon-card" key={sermon._id}>

                            <iframe
                                src={embedUrl}
                                title={sermon.title}
                                allowFullScreen
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                ></iframe>

                                <h3>{sermon.title}</h3>

                                <p>
                                    {new Date(sermon.date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
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