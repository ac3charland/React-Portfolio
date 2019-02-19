import React from "react";
import data from "./data";
import PortFolioCard from "../PortfolioCard";
import "./HomePortfolio.scss";

class HomePortfolio extends React.Component {
    
    state = {
        projects: data.projects,
        project: data.projects[0],        
    };

    slideShow;

    nextProject = (manual) => {
        const component = this;
        if (manual) {
            console.log(component.slideShow)
            clearInterval(component.slideShow);
        }
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
        clearInterval(this.slideShow);
        let newIndex = this.state.project.index - 1;
        if (newIndex < 0) {
            newIndex = data.projects.length - 1;
        }
        this.setState({
            projects: data.projects,
            project: data.projects[newIndex]
        })
    }

    runSlideShow = () => {
        const component = this;
        component.slideShow = setInterval(component.nextProject, 3500);
    }

    componentDidMount = () => {
        this.runSlideShow();
    }

    render() {
        const { projects, project } = this.state;
        return (
            <div id="home-portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h1>Alex's Work</h1>
                            <div className={`cards-slider active-slide-${project.index}`} >
                                <div className="cards-slider-wrapper" style={{
                                    'transform': `translateX(-${project.index*(100/projects.length)}%)`
                                }}>
                                    {
                                        projects.map(project => <PortFolioCard key={project.index} project={project} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 center-align">
                            <button 
                                className="waves-effect waves-teal btn-flat"
                                onClick={() => this.prevProject()}
                            ><i className="material-icons">arrow_back_ios</i></button>
                            <button 
                                className="waves-effect waves-teal btn-flat"
                                onClick={() => this.nextProject(true)}
                            ><i className="material-icons">arrow_forward_ios</i></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 

export default HomePortfolio;