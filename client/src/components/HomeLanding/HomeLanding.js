import React from "react";
import Fade from "react-reveal/Fade";
import "./HomeLanding.scss";

class HomeLanding extends React.Component {

    state = {
        showName: false,
        showTitle: false
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({ showName: true })
        }, 500);

        setTimeout(() => {
            this.setState({ showTitle: true })
        }, 1500)

        window.VANTA.BIRDS({
            el: "#home-landing",
            backgroundColor: 0xffffff,
            color1: 0x263e41,
            color2: 0x263e41
        })
    }

    render = () => (
        <div id="home-landing">
            <div className="container">
                <div className="row">
                    <Fade right when={this.state.showName}>
                        <h1 className="right-align">Alex Charland</h1>
                    </Fade>
                    <Fade left when={this.state.showTitle}>
                        <h2 className="right-align">iOS & Full Stack Web Developer</h2>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default HomeLanding;