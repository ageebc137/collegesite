import React from 'react';

function EventsContainer() {
    return (
        <section id="hambridge-events">
        <h1>Hambridge Events</h1>
        <p>What's happening on campus?</p>
        <div id="latest-events">
            <div class="event-widget">
                <div class="event-widget-date">
                    <p class="event-widget-month">JUL</p>
                    <p class="event-widget-day"><b>20</b></p>
                </div>
                <div class="event-widget-text">
                    <p><b>SEMINAR</b></p>
                    <p><b>A Virtual Workshop On </b></p>
                    <p><b>Economic Growth Amid Corona</b></p>
                    <p>1:30 PM</p>
                </div>
            </div>
            <div class="event-widget"> 
                <div class="event-widget-date">
                    <p>JUL</p>
                    <p>20</p>
                </div>
                <div class="event-widget-text">
                    <p><b>SEMINAR</b></p>
                    <p><b>Digital Grid Virtual Workshop : </b></p>
                    <p><b>Integrating Customer Resources</b></p>
                    <p><b>- U.S. Utility Panel Session</b></p>
                    <p>3:00 PM</p>
                </div>
              
            </div>
            <div class="event-widget">
                <div class="event-widget-date">
                    <p>JUL</p>
                    <p>20</p>
                </div>
                <div class="event-widget-text">
                    <p><b>LECTURE</b></p>
                     <p>Fireside Chat with Janet Moore</p>
                     <p>1:30 PM</p>
                </div>
               
            </div>
            <div class="event-widget">
                <div class="event-widget-date">
                    <p>JUL</p>
                    <p>20</p>
                </div>
                <div class="event-widget-text">
                     <p><b>CONCERT</b></p>
                    <p>Hambridge University Choir</p>
                    <p>Summer Musical Concert </p>
                    <p>7:30 PM</p>
                </div>
                
            </div>
        </div>
        <button> More Hambridge Events</button>
    </section>
    )
}

export default EventsContainer;