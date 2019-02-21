import React from "react";
import "./Tech.scss";

const Tech = (props) => (
    <div className="tech-wrapper">
        <div className="row">
            <img className={props.size + " circle"} alt={props.name} src={props.url} />
        </div>
        {/* <div className="row">
            <span>HTML 5</span>
        </div> */}
    </div>
)

export default Tech;