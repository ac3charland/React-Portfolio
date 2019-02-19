import React from "react";
import "./PortfolioCard.scss";

const PortfolioCard = ({project}) => {
    const {index, name, description} = project;
    return (
        <div id={`card-${index}`} className="card">
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
    )
}

export default PortfolioCard;