import React from 'react';


function NewsContainer() {
    return(
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
                    <button> More Hambridge News</button>
                </section>
    )
}

export default NewsContainer;