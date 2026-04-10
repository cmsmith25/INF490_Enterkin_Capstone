export default function Sermon() {
    return (
       <div className="page-content">
        <h1 className="page-title">Sermon Archive</h1>

        <div className="sermon-grid">
            <div className="sermon-card">
                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Sermon Video"
                    allowFullScreen
                ></iframe>

                <h3>Sample Video</h3>
                <p>March 10, 2026</p>
            </div>

            <div className="sermon-card">
                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Sermon Video"
                    allowFullScreen
                ></iframe>

                <h3>Sample Video</h3>
                <p>March 3, 2026</p>
            </div>
        </div>
       </div>

    );
}