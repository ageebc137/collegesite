import React from 'react';

function AdmissionContainer() {
    return (
        <section>
            <h1>Admission</h1>
            <p>An extraordinary freedom of opportunity - to explore, to collaborate and to challenge yourself</p>
            <div id="id-photo"></div>
            <div className="two-box-section">
                <div className="two-box-widget">
                    <h2>Explore the possibilities of a Hambridge education as you map out your college journey.</h2>
                    <p>We look for distinctive students who exhibit an abundance of energy and curiosity in their classes, activities, projects, research and lives.</p>
                </div>
                <div className="two-box-widget">
                    <h2>Stanford meets the full financial need of every admitted undergrad who qualifies for assistance.</h2>
                    <p>Nearly 70% of undergrads receive financial aid. Generally, tuition is covered for families with incomes below $125,000.</p>
                </div>
            </div>
            <button>More About Admission</button>
        </section>
    )
}

export default AdmissionContainer;