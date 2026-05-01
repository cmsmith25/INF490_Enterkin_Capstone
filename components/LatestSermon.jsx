import { getLatestSermon } from "../sanity/lib/queries";

//converts Youtube URL into iframe URL
function getYouTubeEmbedUrl(url) {
    if(!url) return "";

    let videoId= "";

    //standard Youtube URLS
    if (url.includes("watch?v=")) {
        videoId = url.split("watch?v=")[1].split("&")[0];
    }

    //shortened Youtube URLS
    else if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1].split("?")[0];
    }

    return `https://www.youtube.com/embed/${videoId}`;
}

//fetches latest sermon from Sanity
export default async function LatestSermon() {
    
    //fetch latest sermon
    const data = await getLatestSermon();

    //prevents array
    const sermon = Array.isArray(data) ? data[0] :data;

    //no sermon or missing URL, show message
    if (!sermon || !sermon.videoUrl) {
        return (
            <section className="latest-sermon-section">
                <h2 className="latest-sermon-title">Latest Sermon</h2>
                <p>No sermons available yet.</p>
            </section>

        );
    }

    //converts Youtube URL into embed
    const embedUrl = getYouTubeEmbedUrl(sermon.videoUrl);

    return (
        <section className="latest-sermon-section">
            <h2 className="latest-sermon-title">Latest Sermon</h2>

            <div className="latest-sermon-card">

                <iframe
                    src={embedUrl}
                    title={sermon.title}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                </iframe>

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
