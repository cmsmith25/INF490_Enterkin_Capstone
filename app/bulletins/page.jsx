export const dynamic = "force-dynamic";

import { getEvents } from "../../sanity/lib/eventQueries";

//event calendar
function SimpleCalendar({ events }) {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();


    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay= new Date(year, month, 1).getDay();

    //format event dates (YYYY-MM-DD)
    const eventDates = events.map(e => 
        new Date(e.date).toISOString().split("T")[0]
    );

    const days = [];

    //blank before month starts
    for (let i = 0; i < firstDay; i++) {
        days.push(null);
    }

    //actual days in the month
    for (let d = 1; d <= daysInMonth; d++) {
        const date = new Date(year, month, d);
        const iso = date.toISOString().split("T")[0];

        days.push({
            day: d,
            hasEvent: eventDates.includes(iso),
        });
    }

    return (
        <div className="calendar">
            <h2>
                {today.toLocaleString("default", { month: "long" })} {year}
            </h2>

            <div className="calendar-grid">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => (
                    <div key={d} className="calendar-day-name">{d}</div>
                ))}

                {days.map((d, i) =>
                    d ? (
                        <div key={i} className={`calendar-cell ${d.hasEvent ? "has-event": ""}`}>
                            {d.day}
                        </div>
                    ) : (
                        <div key = {i}></div>
                    )
                )}
            </div>
        </div>
    );
}


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
            date: date.toISOString().split("T")[0],
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
    const events = [...recurringSundays, ...cmsEvents].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
    );
    

    return (
        <div className="bulletin-page">

            <h1 className="page-title">
                Church Bulletin
            </h1>


            {/*calendar*/}
            <SimpleCalendar events={events} />

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