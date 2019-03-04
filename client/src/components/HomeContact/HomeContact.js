import React from "react";
import "./HomeContact.scss";

const HomeContact = () => (
    <div className="container">
        <div className="row">
            <div className="col s12">
                <h1>Contact Alex</h1>
            </div>
        </div>
        <div className="row">
            <div className="col s12 m4 center-align">
                <h5><a href="mailto:ac3charland@gmail.com">Email</a></h5>
            </div>
            <div className="col s12 m4 center-align">
                <h5><a href="https://www.linkedin.com/in/alex-charland/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h5>
            </div>
            <div className="col s12 m4 center-align">
                <h5><a href="https://github.com/ac3charland" target="_blank" rel="noopener noreferrer">GitHub</a></h5>
            </div>
        </div>
    </div>
)

export default HomeContact;