import React from 'react';
import NewsContainer from './Home/NewsContainer';
import EventsContainer from './Home/EventsContainer';
import TopBarMenu from './Home/TopBarMenu';
import BotBarMenu from './Home/BotBarMenu';
import CentralBannerContainer from './Home/CentralBannerContainer';
import ExploreBannerContainer from './Home/ExploreBannerContainer';
import AcademicsContainer from './Home/AcademicsContainer';
import QuoteContainer from './Home/QuoteContainer';
import ResearchContainer from './Home/ResearchContainer';
import HealthcareContainer from './Home/HealthcareContainer';
import CampusLifeContainer from './Home/CampusLifeContainer';
import AdmissionContainer from './Home/AdmissionContainer';
import AboutContainer from './Home/AboutContainer';


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