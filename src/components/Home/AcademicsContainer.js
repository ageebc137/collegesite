import React from 'react';
import photo from '../../assets/police.jpg';

function AcademicsContainer() {
    return (
        <section>
            <h1>Academics</h1>
            <p>Preparing students to make meaningful contributions to society</p>
            <p>as engaged citizens and leaders in a complex world</p>
            <div className="three-box-section">
                <div className="three-box-widget">
                    <div className="three-box-photo"></div>
                    <h2>Undergraduate Education</h2>
                    <p>Rich learning experiences that provide a 
                        broad liberal arts foundation and deep subject-area expertise</p>
                     <h4><a>Undergraduate Education &#62;</a></h4>   
                </div>
                <div className="three-box-widget">
                <div className="three-box-photo"></div>
                    <h2>Graduate Education</h2>
                    <p>Unsurpassed opportunities to participate in the advancement of entire fields of knowledge</p>
                     <h4><a>Graduate Education &#62;</a></h4>  
                </div>
                <div className="three-box-widget">
                <div className="three-box-photo"></div>
                <h2>Lifelong learning</h2>
                    <p>Unsurpassed opportunities to participate in the advancement of entire fields of knowledge</p>
                     <h4><a>Programs for Lifelong Learning&#62;</a></h4>  
                </div>

            </div>
            <h2>Seven schools in which to puruse your passions</h2>
            <p><a href="google.com">Medicine</a> | <a href="google.com">Law</a> | <a href="google.com">Humanities &amp; Sciences</a> | <a href="google.com">Engineering</a> | <a href="google.com">Education</a> | <a href="google.com">Music</a> | <a href="google.com">Business</a></p>
            <button>More About Academics</button>
        </section>
    )
}

export default AcademicsContainer;