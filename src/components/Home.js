import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="about-content container">
            <div className="profile-card">
                <img src={`${process.env.PUBLIC_URL}/images/me_cropped.jpg`} alt="Phil Van-Lane"/>
                <div className="profile-content">
                    <h1>Phil Van-Lane</h1>
                    <div className="profile-card-details">
                    3rd Year PhD Candidate
                    <br></br>
                    <b>
                        <a href="https://www.astro.utoronto.ca/" target="_blank" rel="noopener noreferrer">
                    David A. Dunlap Department of Astronomy & Astrophysics, U of T
                    </a>
                    </b>
                    </div>
                    <div className="profile-card-contact">
                        <hr />
                        <i class="fas fa-envelope"></i>
                        &nbsp;
                        <a href="mailto:phil.vanlane@mail.utoronto.ca">phil.vanlane@mail.utoronto.ca</a>
                        <br></br>
                        <span>
                        <img src="https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png" alt="ORCID logo"/>
                        &nbsp;
                        <a href="https://orcid.org/0009-0009-4567-9946" target="_blank" rel="noopener noreferrer">0009-0009-4567-9946</a></span>
                        <br></br>
                        <i class="fas fa-map-marker"></i>
                        &nbsp;
                        AB223, 50 Saint George St., Toronto ON
                    </div>
                </div>
            </div>
            <div className="about-desc">
                <h1>About Me</h1>
                <br></br>
                <p>
                I am currently a 3rd year PhD candidate with the David A. Dunlap Department of Astronomy & Astrophysics at University of Toronto (UofT). My research focuses on how we can use rotation and magnetic activity to constrain the ages of low mass main sequence stars, with the goal of using that information to inform exoplanet evolution models. My thesis advisors are Drs. Joshua S. Speagle (沈佳士) and Gwendolyn Eadie from U of T, and Dr. Ryan Cloutier from McMaster University.
                {/* Starting Fall 2025, I will also be a Visiting Graduate Student at <a href="https://astro.ucsd.edu/" target="_blank" rel="noopener noreferrer">UC San Diego</a> with Dr. Chris Theissen. */}
                <div className="spacer"></div>
                I was born and raised in Toronto, and completed my BSc in Earth Science (with a Geophysics specialization) at University of Waterloo in 2015. I spend the next seven years working in data engineering, software development, and product management before beginning my PhD in 2022. 
                <div className="spacer"></div>
                Outside of work I love travelling and anything outdoors, especially camping, canoeing (including long distance races), and hiking. I also love playing sports (hockey, tennis, and more recently running and triathlons), and enjoy a beer and good board game at the end of the day (favourite game: Spirit Island).


                </p>
            </div>
        </div>
    );
}

export default Home;