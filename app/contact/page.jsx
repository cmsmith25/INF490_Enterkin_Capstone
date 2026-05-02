export default function Contact() {
    return (
        <div className="page-content">

            <h1 className="page-title">Contact Us</h1>

            <div className="contact-container">

                {/*Contact Info*/}
                <div className="contact-info">
                    <h2>Visit Us</h2>

                    <p>
                        <strong>First Baptist Church of Norwich</strong><br />
                        239 S Briarwood St.
                        Norwich, KS 67118
                    </p>

                    <p>
                        <strong>Phone:</strong> (620)478-2258
                    </p>

                    <p>
                        <strong>Email:</strong> norwichbaptistchurch@outlook.com
                    </p>
                </div>

                {/* Map */}
                <div className="contact-map">
                    <iframe
                        src="https://www.google.com/maps?q=239+S+Briarwood+St,+Norwich,+KS+67118&output=embed"
                        height="300"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        ></iframe>
                </div>
            </div>
        </div>
    );
}