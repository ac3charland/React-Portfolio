import React from "react";
import HomeBio from "../../components/HomeBio";
import HomePortfolio from "../../components/HomePortfolio";
import HomeTechs from "../../components/HomeTechs";
import HomeLanding from "../../components/HomeLanding";
import "./Home.scss";

const Home = () => (
    <div >
            <HomeLanding />
            <HomeBio />
            <HomePortfolio />
            <HomeTechs />
    </div>
)

export default Home;