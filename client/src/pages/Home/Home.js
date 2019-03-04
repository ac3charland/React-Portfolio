import React from "react";
import HomeBio from "../../components/HomeBio";
import HomePortfolio from "../../components/HomePortfolio";
import HomeTechs from "../../components/HomeTechs";
import HomeLanding from "../../components/HomeLanding";
import HomeContact from "../../components/HomeContact";
import Footer from "../../components/Footer";
import "./Home.scss";

const Home = () => (
    <div >
            <HomeLanding />
            <HomeBio />
            <HomePortfolio />
            <HomeTechs />
            <HomeContact />
            <Footer />
    </div>
)

export default Home;