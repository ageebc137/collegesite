import React from 'react';

function HomePage() {
    return (
        <> 
            <header>
            <section id="brand-bar">
                <a class="brand-title">Hambridge University</a>
                <nav class="navbar" >
                    <ul class="navbar-list navbar-top-list">
                        <li class="navbar-item">Students</li>
                        <li class="navbar-item">Faculty &#x26; Staff</li>
                        <li class="navbar-item">Parents </li>
                        <li class="navbar-item">Visitors</li>
                        <li class="navbar-item">Alumni</li>
                    </ul>
                </nav>
            </section>
            <section>
                <nav class=""> 
                    <ul class="navbar-list navbar-bot-list">
                            <li class="">News</li>
                            <li class="">Events</li>
                            <li class="">Academics</li>
                            <li class="">Research</li>
                            <li class="">Health Care</li>
                            <li class="">Campus Life</li>
                            <li class="">Admission</li>
                            <li class="">About</li>
                        </ul>
                </nav>
            </section>
            
            </header>
            
        </>
    );
}

export default HomePage;