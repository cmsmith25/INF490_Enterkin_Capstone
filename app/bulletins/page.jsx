import { getEvents } from "../../sanity/lib/eventQueries";


//generates recurring sundays
function getNextSundays(count = 4) {
    const sundays = [];
    const today = new Date();

    //how many days til next Sunday (0 = Sunday)
    const dayOfWeek = today.getDay();
    const daysUntilSunday = (7 - dayOfWeek) % 7;
    
    let nextSunday = new Date(today);
    nextSunday.setDate(today.getDate() + daysUntilSunday);

    //generate multiple sundays
    for (let i = 0; i < count; i++) {
        const date = new Date(nextSunday);
        date.setDate(nextSunday.getDate() + i * 7);

        sundays.push({
            _id: `sunday-${i}`,
            title: "Sunday Worship Service",
            date: date.toISOString(),
            time: "11:00 AM",
            description: "Weekly worship service."
        });
    }

    return sundays;
}

export default async function Bulletin() {

    //events from Sanity (editable)
    const cmsEvents = await getEvents();

    //auto-generated sundays
    const recurringSundays = getNextSundays();

    //combine both sources
    const events = [...recurringSundays, ...cmsEvents];
    

    return (
        <div className="bulletin-page">

            <h1 className="page-title">
                Weekly Bulletin
            </h1>

            {/*Bulletin placeholder*/}
            <section className="bulletin-box">

                <h2>Bulletin Coming Soon!</h2>

                <p>
                    Our Weekly bulletin will be available here soon.
                    Please check back for updates.
                </p>
            </section>

            {/*Events section*/}
            <section className="events-section">
                <h2>Upcoming Events</h2>

                <div className="events-grid">

                    {events.map((event) => (
                        <div
                            key={event._id}
                            className="event-card">
                            
                            <h3>{event.title}</h3>

                            <p>
                                {new Date(event.date).toLocaleDateString(
                                    "en-US",
                                    {
                                        weekday: "long",
                                        month: "long",
                                        day: "numeric",
                                    }
                                )}
                            </p>

                            <p>{event.time}</p>

                            <p>{event.description}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}