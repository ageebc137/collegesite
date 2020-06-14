import React from 'react';
import NewsContainer from './Home/NewsContainer';
import EventsContainer from './Home/EventsContainer';
import TopBarMenu from './Home/TopBarMenu';
import BotBarMenu from './Home/BotBarMenu';

function HomePage() {
    return (
        <> 
            <header>
                <TopBarMenu></TopBarMenu>
                <BotBarMenu></BotBarMenu>
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