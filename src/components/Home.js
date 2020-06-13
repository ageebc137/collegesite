import React from 'react';
import NewsContainer from './Home/NewsContainer';
import EventsContainer from './Home/EventsContainer';
import TopBarMenu from './Home/TopBarMenu';

function HomePage() {
    return (
        <> 
            <header>
                <TopBarMenu></TopBarMenu>
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
                <EventsContainer></EventsContainer>
            </main>
            
        </>
    );
}

export default HomePage;