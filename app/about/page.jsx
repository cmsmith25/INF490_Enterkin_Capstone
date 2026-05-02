export default function About() {
    return (
        <div className="page-content">

            <h1 className="page-title">About Our Church</h1>

            {/*Main church photo*/}
            <div className="about-hero">
                <img
                    src="/images/baptist1.jpg"
                    alt="Church Building"
                />
            </div>

            {/*About Section*/}
            <section className="about-section">

                <h2>Who We Are</h2>

                <p>
                    Welcome to First Baptist Church of Norwich, Kansas. We are a Christ-centered community
                    dedicated to worship, fellowship, and serving others. Our church family strives
                    to provide a welcoming environment where individuals and families can grow in 
                    faith together.
                </p>

                <p>
                    We are committed to sharing God's love through worship, outreach, and community
                    support. Whether you are visiting for the first time or have been attending for
                    years, we invite you to be part of our church family. 
                </p>

            </section>

            {/*Church history section*/}
            <section className="about-section">

                <h2>Our History</h2>

                <p>
                    Our church has been part of the Norwich community for many years. The the current church building 
                    was erected in 1914, with the original church building sitting 7 miles West in Adams, KS. 
                    Through seasons of growth and change, we have remained committed to spreading
                    the message of hope and faith.
                </p>

                <p>
                    
                </p>
            </section>

            {/*About pastor section*/}
            <section className="about-pastor-section">

               <div className="pastor-text"> 
                    <h2>Meet our Pastor</h2>

                    <p>
                        Our church has been led by Pastor Eric Taylor since the Summer of 2008. His wife, Lorie Taylor,
                        has had family attending the church for two generations. Their goal for the church is for it
                        to be exactly what God intended, to be a rising tide that lifts all ships. 

                        "When people visit, we want them to find the environment loving, safe, and nourishing." -The Taylors
                        
                    </p>
                </div>

                {/*Pastor photo*/}
            <div className="about-pastor-hero">
                <img
                    src="/images/pastor.jpg"
                    alt="Pastor Taylor"
                />
            </div>
            </section>

            {/*Photos*/}

            <section className="photo-gallery">

                <h2>Church Life</h2>

                <div className="gallery-grid">

                    <img src="/images/church1.jpg" alt="Church Event" />
                    <img src="/images/church2.jpg" alt="Worship Service" />
                    <img src="/images/church3.jpg" alt="Community Event" />

                </div>

            </section>
        </div>
    );
}