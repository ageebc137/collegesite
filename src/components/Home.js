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
                            <div id="second-news-photo" className="news-widget news-widget-small">
                                <div class="news-widget-small-title">
                                    <p>HUMANITIES</p>
                                    <p>Economics Chair Sanchez</p>
                                    <p>Appointed to Head Bank of Spain</p>
                                </div>
                            </div>
                            <div id="third-news-photo" className="news-widget news-widget-small">
                            <div class="news-widget-small-title">
                                    <p>SOCIAL SCIENCES</p>
                                    <p>Race and Policing: A Study </p>
                                    <p>On Nationwide Policing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="top-news">
                        <div id="top-news-right">
                            <div id="fourth-news-photo" className="news-widget news-widget-small">
                                <div class="news-widget-small-title">
                                        <p>SCIENCES</p>
                                        <p>Physicist Dr. Clarkson Wins </p>
                                        <p>Nobel Prize for Entropy</p>
                                </div>
                            </div>
                            <div id="fifth-news-photo" className="news-widget news-widget-small">
                                <div class="news-widget-small-title">
                                   
                                        <p>MEDICINE</p>
                                        <p>New Pill Discovered </p>
                                        <p>That Can Treat Alzhiemer's</p>
                            
                                </div>
                            </div>
                        </div>
                        <div id="sixth-news-photo" className="news-widget news-widget-large">
                            <p>ENGINEERING</p>
                            <p>Hambridge students develop new network mapping</p>
                            <p>to make self-driving cars safer</p>
                        </div>
                    </div>
                </section>
            </main>
            
        </>
    );
}

export default HomePage;