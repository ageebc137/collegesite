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
            <section>
                <nav className=""> 
                    <ul className="navbar-list navbar-bot-list">
                            <li className="">News</li>
                            <li className="">Events</li>
                            <li className="">Academics</li>
                            <li className="">Research</li>
                            <li className="">Health Care</li>
                            <li className="">Campus Life</li>
                            <li className="">Admission</li>
                            <li className="">About</li>
                        </ul>
                </nav>
            </section>
            <section id="center-panel">
                <h1 className="brand-title">Hambridge</h1>
            </section>
            {/* <section>
                <p>Explore Hambridge</p>
            </section> */}
            </header>
            
        </>
    );
}

export default HomePage;