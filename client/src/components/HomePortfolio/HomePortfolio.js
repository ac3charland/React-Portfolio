import React from "react";
import data from "./data";
import PortFolioCard from "../PortfolioCard";
import "./HomePortfolio.scss";

class HomePortfolio extends React.Component {
    
    state = {
        projects: data.projects,
        project: data.projects[0]
    };

    nextProject = () => {
        let newIndex = this.state.project.index + 1;
        if (newIndex >= data.projects.length) {
            newIndex = 0
        }
        this.setState({
            projects: data.projects,
            project: data.projects[newIndex]
        })
    }

    prevProject = () => {
        let newIndex = this.state.project.index - 1;
        if (newIndex < 0) {
            newIndex = data.projects.length - 1;
        }
        this.setState({
            projects: data.projects,
            project: data.projects[newIndex]
        })
    }

    render() {
        const { projects, project } = this.state;
        return (
            <div id="home-portfolio">
                <div className="container">
                    <button
                        onClick={() => this.nextProject()}
                        // disabled={this.state.project.index === data.projects.length - 1}
                    >Next</button>
                    <button
                        onClick={() => this.prevProject()}
                        // disabled={this.state.project.index === 0}
                    >Prev</button>

                    <div>
                        <h1>Slideshow to go below here.</h1>
                        <div className="cards-slider">
                            <div className="cards-slider-wrapper">
                                {
                                    projects.map(project => <PortFolioCard key={project.index} project={project} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 

export default HomePortfolio;