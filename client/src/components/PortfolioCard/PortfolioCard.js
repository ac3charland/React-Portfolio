import React from "react";
import "./PortfolioCard.scss";

const PortfolioCard = ({project}) => {
    const {index, name, description} = project;
    return (
        <div id={`card-${index}`} className="card">
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}

export default PortfolioCard;