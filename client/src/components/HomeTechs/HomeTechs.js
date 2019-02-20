import React from "react";
import Tech from "../Tech";
import "./HomeTechs.scss"

import data from "./data";

const HomeTechs = () => (
    <div className="dark-section row-full">
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <h1>Skills & Technologies</h1>
                </div>
            </div>
            <div className="row center-align">
                {data.techs.map(tech => (
                    <div className="col s6 m3">
                        <Tech name={tech.name} url={tech.url} />
                    </div>
                ))}
                {/* <div className="col s6 m3">
                    <Tech />
                </div>
                <div className="col s6 m3">
                    <Tech />
                </div>
                <div className="col s6 m3">
                    <Tech />
                </div>
                <div className="col s6 m3">
                    <Tech />
                </div>
                <div className="col s6 m3">
                    <Tech />
                </div>
                <div className="col s6 m3">
                    <Tech />
                </div>
                <div className="col s6 m3">
                    <Tech />
                </div>
                <div className="col s6 m3">
                    <Tech />
                </div> */}
            </div>
        </div>
    </div> 
)

export default HomeTechs;