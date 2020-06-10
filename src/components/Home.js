import React from 'react';
import NewsContainer from './Home/NewsContainer';

function HomePage() {
    return (
        <> 
            <header>
                <section id="brand-bar">
                    <a className="brand-title">Hambridge University</a>
                    <nav className="navbar" >
                        <ul className="navbar-list navbar-top-list">
                            <li className="navbar-item">Students</li>
                            <li className="navbar-item">Faculty &#x26; Staff</li>
                            <li className="navbar-item">Parents </li>
                            <li className="navbar-item">Visitors</li>
                            <li className="navbar-item">Alumni</li>
                        </ul>
                    </nav>
                </section>
                <section id="sub-bar">
                    <nav> 
                        <ul className="navbar-list navbar-bot-list">
                                <li className="navbar-item navbar-item-bottom">News</li>
                                <li className="navbar-item navbar-item-bottom">Events</li>
                                <li className="navbar-item navbar-item-bottom">Academics</li>
                                <li className="navbar-item navbar-item-bottom">Research</li>
                                <li className="navbar-item navbar-item-bottom">Health Care</li>
                                <li className="navbar-item navbar-item-bottom">Campus Life</li>
                                <li className="navbar-item navbar-item-bottom">Admission</li>
                                <li className="navbar-item navbar-item-bottom">About</li>
                        </ul>
                    </nav>
                </section>
                <section id="center-panel">
                    <h1 className="brand-title">Hambridge</h1>
                </section>
                <section id="explore-banner">
                    <p>Explore Hambridge</p>
                </section>
                
            </header>
            <main>
                <NewsContainer></NewsContainer>
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
                </section>
            </main>
            
        </>
    );
}

export default HomePage;