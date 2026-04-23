import { getLatestSermon } from "../sanity/lib/queries";

function getYouTubeEmbedUrl(url) {
    if(!url) return "";

    let videoId= "";

    if (url.includes("watch?v=")) {
        videoId = url.split("watch?v=")[1].split("&")[0];
    }

    else if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1].split("?")[0];
    }

    return `https://www.youtube.com/embed/${videoId}`;
}

export default async function LatestSermon() {
    
    const sermon = await getLatestSermon();

    if (!sermon) return null;

    const embedUrl = getYouTubeEmbedUrl(sermon.videoUrl);

    return (
        <section className="latest-sermon-section">
            <h2 className="latest-sermon-title">Latest Sermon</h2>

            <div className="latest-sermon-card">

                <iframe
                    src={embedUrl}
                    title={sermon.title}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>

                    <h3>{sermon.title}</h3>

                    <p>
                        {new Date(sermon.date).toLocaleDateString("en-US", {
                            year:"numeric",
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
        </section>
    );
    

}
