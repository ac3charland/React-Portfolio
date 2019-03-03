import React from "react";
import "./Tech.scss";

const Tech = (props) => (
    <div id={`tech-wrapper-${props.index}`} className="tech-wrapper">
        <div className="row">
            <img 
                className={props.size + " circle"} 
                alt={props.name} 
                src={props.url}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave} 
            /> 
        </div>
        <div className="row">
            <h5 className="tech-title">{props.name}</h5>
        </div>
    </div>
)

export default Tech;