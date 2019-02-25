import React from "react";
import Tech from "../Tech";
import "./HomeTechs.scss"

import data from "./data";

class HomeTechs extends React.Component {

    render() {

        return (
            <div className="dark-section row-full">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h1>Skills & Technologies</h1>
                        </div>
                    </div>
                    <div className="row center-align">
                        {data.techs.map(tech => (
                            <div key={"tech-" + tech.index} className="col s6 m3">
                                <Tech index={tech.index} name={tech.name} url={tech.url} size="tech-normal" />
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
    }
} 

export default HomeTechs;