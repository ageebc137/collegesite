import React from 'react';

function HealthcareContainer() {
    return (
        <section>
            <h1>Health Care</h1>
            <p>Caring for people and advancing human health through innovative research, education and health care</p>
            <div className="three-box-section">
                <div className="three-box-widget">
                    <div className="three-box-photo"></div>
                    <h2>Hambridge Health Care</h2>
                    <p>Our multidisciplinary approach delivers unparalleled care for each patient’s unique needs, coordinating expertise with the most advanced technology.</p>
                     <h4><a>Hambridge Health Care &#62;</a></h4>   
                </div>
                <div className="three-box-widget">
                <div className="three-box-photo"></div>
                    <h2>Hambridge Medicine</h2>
                    <p>Comprised of our biomedical research, education and clinical enterprises, Stanford Medicine is leading a worldwide revolution in precision health.</p>
                     <h4><a>Hambridge Medicine &#62;</a></h4>  
                </div>
                <div className="three-box-widget">
                <div className="three-box-photo"></div>
                <h2>Hambridge Children's Health</h2>
                    <p>The only health care network in the Bay Area – and one of the few in the country – exclusively dedicated to pediatric and obstetric care</p>
                     <h4><a>Hambridge CHildren's Health &#62;</a></h4>  
                </div>

            </div>
        </section>
    )
}

export default HealthcareContainer;