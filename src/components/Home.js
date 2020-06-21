import React from 'react';
import NewsContainer from './Home/NewsContainer';
import EventsContainer from './Home/EventsContainer';
import TopBarMenu from './Home/TopBarMenu';
import BotBarMenu from './Home/BotBarMenu';
import CentralBannerContainer from './Home/CentralBannerContainer';
import ExploreBannerContainer from './Home/ExploreBannerContainer';



function HomePage() {
    return (
        <> 
            <header>
                <TopBarMenu/>
                <BotBarMenu/>
                <CentralBannerContainer/>
                <ExploreBannerContainer/>
            </header>
            <main>
                <NewsContainer/>
                <EventsContainer/>
                <AcademicsContainer />
                <QuoteContainer />
                <ResearchContainer />
                <HealthcareContainer />
                <CampusLifeContainer />
                <AdmissionContainer />
                <AboutContainer />
            </main>  
        </>
    );
}

export default HomePage;