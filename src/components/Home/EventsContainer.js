import React from 'react';

function EventsContainer() {
    return (
        <section id="hambridge-events">
        <h1>Hambridge Events</h1>
        <p>What's happening on campus?</p>
        <div id="latest-events">
            <div class="event-widget">
                <p>A Virtual Workshop On </p>
                <p>Economic Growth Amid Corona</p>
            </div>
            <div class="event-widget"> 
                <p>Digital Grid Virtual Workshop : </p>
                <p>Integrating Customer Resources</p>
                <p>- U.S. Utility Panel Session</p>
            </div>
            <div class="event-widget">
                <p>Fireside Chat with Janet Moore</p>
            </div>
            <div class="event-widget">
                <p>Hambridge University Choir</p>
                <p>Summer Musical Concert </p>
            </div>
        </div>
        <button> More Hambridge Events</button>
    </section>
    )
}

export default EventsContainer;