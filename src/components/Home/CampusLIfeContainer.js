import React from 'react';

function CampusLifeContainer() {
    return (
        <section>
            <h1>Campus Life</h1>
            <p>A thriving community of creative and accomplished people from around the world</p>
            <div className="three-box-section">
                <div className="three-box-widget">
                    <div className="three-box-photo"></div>
                    <h2>Student Life</h2>
                    <p>A residential campus with diverse housing, exceptional dining, health care and over 600 student organizations</p>
                     <h4><a>Student Affairs &#62;</a></h4>   
                </div>
                <div className="three-box-widget">
                <div className="three-box-photo"></div>
                    <h2>Arts &amp; Culture</h2>
                    <p>A rich tradition of fostering creativity and a vibrant arts district on campus</p>
                     <h4><a>Hambridge Arts &#62;</a></h4>  
                </div>
                <div className="three-box-widget">
                <div className="three-box-photo"></div>
                <h2>Athletics &amp; Fitness</h2>
                    <p>36 varsity sports, 32 club sports and state-of-the-art recreational facilities and fitness programs</p>
                     <h4><a>Go Hambridge &#62;</a></h4>  
                </div>
                
            </div>
            <button>More About Campus Life</button>
        </section>
    )
}

export default CampusLifeContainer;