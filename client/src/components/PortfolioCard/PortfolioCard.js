import React from "react";
import Tech from "../Tech";
import data from "../HomeTechs/data"
import "./PortfolioCard.scss";

const PortfolioCard = ({project}) => {
    const {index, name, description, technologies, img, url, gitHub} = project;
    const {techs} = data;
    return (
        <div id={`card-${index}`} className="card">
            <div className="row expand">
                <div className="col s12 img-container">
                    <h5 className="project-title">{name}</h5>
                    <img className="portfolio-img" src={img} alt={name + " Image"} />
                    <span>{description}</span>
                </div>
            </div>
            {/* <div className="row">
                <div className="col s12">
                    
                </div>
            </div> */}
            <div className="row center-align">
                {technologies.map(tech => (
                    <div className="col s3">
                        <Tech name={techs[tech].name} url={techs[tech].url} size="tech-small"/>
                    </div>
                ))}
            </div>
            <div className="row links">
                <div className='col s6 right-align'>
                    <a href={url} target="_blank" rel="noopener noreferrer"><i className="material-icons">link</i></a>
                    
                </div>
                <div className='col s6 left-align'>
                    <a href={gitHub} target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt"></i></a>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard;