import React from "react";
import "../HomeBio/HomeBio.css";

const HomeBio = () => (
    <div id="home-bio" className="row">
        <div className="col s12 m4 l3">
            <img className="responsive-img" src="images/HeadshotSquare.jpg" alt="Alex Charland Headshot" />
        </div>
        <div className="col s12 m8 l9">
            <p>
                I'm a native iOS and Full Stack Web Developer with experience in Consulting, Healthcare and Biological Sciences, as well as a UW Madison graduate with a double major in Biology and Jazz Studies. I'm currently self-taught in Swift (iOS) and have just acquired MERN stack skills at the University of Minnesota's Coding Bootcamp.
            </p>
            <p>
                Some of the technologies and languages I'm familiar with include Swift, Javascript/jQuery, the MERN stack, Bootstrap, Materialize, and Firebase, along with software like Excel, Word, Access, VS Code, XCode, Eclipse, and IntelliJ. I'm driven and curious, with an eye for detail and a love of collaboration, and I'm eager to join a diverse environment with teamwork-based problem solving and opportunities to learn from others. If I sound like the kind of developer you'd want in your company, feel free to contact me with questions or inquiries.
            </p>
        </div>
    </div>
);

export default HomeBio;