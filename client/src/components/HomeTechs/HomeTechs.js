import React from "react";
import Tech from "../Tech";
import "./HomeTechs.scss"

import data from "./data";

class HomeTechs extends React.Component {

    state = {
        techs: data.techs,
        selectedTech: "none"
    };

    techEnter = (id) => {
        this.setState({
            selectedTech: id
        });
    }

    techLeave = () => {
        this.setState({
            selectedTech: "none"
        });
    }

    render() {
        const {techs, selectedTech} = this.state;
        return (
            <div className="dark-section row-full">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h1>Skills & Technologies</h1>
                        </div>
                    </div>
                    <div className={`row center-align techs-container active-card-${selectedTech}`}>
                        {techs.map(tech => (
                            <div key={`tech-${tech.index}`} className="col s6 m3">
                                <Tech 
                                    index={tech.index}
                                    name={tech.name} 
                                    url={tech.url} 
                                    size="tech-normal"
                                    onMouseEnter={() => this.techEnter(tech.index)}
                                    onMouseLeave={this.techLeave} 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
} 

export default HomeTechs;