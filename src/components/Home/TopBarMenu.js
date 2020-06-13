import React from 'react';

function TopBarMenu() {
    return(
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
    )
}

export default TopBarMenu;