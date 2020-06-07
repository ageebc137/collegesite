import React from 'react';

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
                <section id="hambridge-news">
                    <h1>Hambridge Today</h1>
                    <p>The latest news from Hambridge</p>
                    <div id="top-news">
                        <div id="first-news-photo" className="news-widget news-widget-large">
                            <p>IN THE SPOTLIGHT</p>
                            <p>Hambridge scholars and researchers lend</p>
                             <p>their expertise to tackling the COVID-19 crisis</p>
                            </div>
                        <div id="top-news-right">
                            <div className="news-widget news-widget-small"></div>
                            <div className="news-widget news-widget-small"></div>
                        </div>
                    </div>
                    <div id="top-news">
                        <div id="top-news-right">
                            <div className="news-widget news-widget-small"></div>
                            <div className="news-widget news-widget-small"></div>
                        </div>
                        <div className="news-widget news-widget-large"></div>
                    </div>
                </section>
            </main>
            
        </>
    );
}

export default HomePage;