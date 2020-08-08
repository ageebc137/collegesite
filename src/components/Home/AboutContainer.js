import React from 'react';

function AboutContainer() {
    return (
        <section>
            <h1>About Hambridge</h1>
            <h2>A place for learning, discovery, innovation expression and discourse</h2>
           <div className="three-box-section">
                <div className="three-box-widget">
                    <p>Opened in</p>
                    <h2>1742</h2>
                </div>
                <div className="three-box-widget">
                    <p>Students</p>
                    <h2>20,525</h2>
                </div>
                <div className="three-box-widget">
                    <p>Faculty</p>
                    <h2>2,435</h2>
                </div>
            </div>
            <button>More about Hambridge</button>
            <div id="base-photo"></div>
            <div id="base-menu">
                <div>
                    <h3>Schools</h3>
                    <ul>
                        <li>Business</li>
                        <li>Education</li>
                        <li>Engineering</li>
                        <li>Humanities &amp; Sciences</li>
                        <li>Law</li>
                        <li>Medicine</li>
                    </ul>
                </div>
                <div>
                <div>
                    <h3>Departments</h3>
                    <ul>
                        <li>Business</li>
                        <li>Education</li>
                    </ul>
                </div>
                <div>
                    <h3>Research</h3>
                    <ul>
                        <li>Research Centers A-Z</li>
                        <li>Interdisciplinary Research</li>
                        <li>Libraries</li>
                    </ul>
                </div>
                </div>
                
         
            <div id="mid-base-section">
                <div>
                    <h3>Health Care</h3>
                    <ul>
                        <li>Hambridge Health Care</li>
                        <li>Hambridge Children's Health</li>
                    </ul>
                    <h3>Online Learning</h3>
                    <ul>
                        <li>Hambridge Online</li>
                    </ul>
                </div>
                <div>
                    <h3>About Hambridge</h3>
                    <ul>
                        <li>Hambridge Health Care</li>
                        <li>Hambridge Children's Health</li>
                    </ul>
                    <h3>Online Learning</h3>
                    <ul>
                        <li>Hambridge Online</li>
                    </ul>
                </div>
                <div>
                    <h3>About Hambridge</h3>
                    <ul>
                        <li>Facts</li>
                        <li>History</li>
                        <li>Accreditation</li>
                    </ul>
                    <h3>Admission</h3>
                    <ul>
                        <li>Undergraduate</li>
                        <li>Graduate</li>
                        <li>Financial Aid</li>
                    </ul>
                </div>
                <div>
                    <h3>Resources</h3>
                    <ul>
                        <li>A-Z Index</li>
                        <li>Campus Map</li>
                        <li>Directory</li>
                        <li>Hambridge Profiles</li>
                    </ul>
                </div>
            </div>
            <ul>
                <li>Applying</li>
                <li>Visiting</li>
                <li>Giving</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
            </div>
            <footer>
                <div>
                    <p>Hambridge</p>
                    <p>University</p>
                </div>
                <div className="flex-container flex-container-column">
                    <div className="flex-container flex-container-row">
                        <h4>Hambridge Home</h4>
                        <h4>Maps &amp; Directions</h4>
                        <h4>Search Hambridge</h4>
                        <h4>Emergency Info</h4>
                    </div>
                    <div className="flex-container flex-container-row">
                        <p>Terms of Use</p>
                        <p>Privacy</p>
                        <p>Copyright</p>
                        <p>Trademarks</p>
                        <p>Non-Discrimination</p>
                        <p>Accessibility</p>
                    </div>
                    <div className="flex-container flex-container-row">
                    <p>&#169; Hambrige University</p>
                    <p>Hambridge, Virginia</p>
                </div>
                </div>
                
            </footer>
        </section>
    )
}

export default AboutContainer;