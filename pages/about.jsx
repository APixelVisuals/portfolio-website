import React from "react";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import updateTitles from "../static/updateTitles";
import "../global.css";
import "./about.css";

export default class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titles: {
                apixelVisuals: [null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            }
        };
    };

    render = () => {
        return (
            <div id="about">

                <Head
                    title="About - APixel Visuals"
                    description="Just some information about myself and what I do"
                />
                <NavBar lolMode={this.state.lolMode} toggleLolMode={this.toggleLolMode} />

                <div id="content">

                    <div className="top-margin" />

                    <div className="title">
                        <h1 className="text">{"APixel Visuals".split("").map((l, i) => <span className={this.state.titles.apixelVisuals[i]}>{l}</span>)}</h1>
                    </div>

                    <h1 className="info">Hey! I'm APixel. I'm a programmer with an interest to explore new ideas. I started my journey around the summer of 2017 when I learned JavaScript on <a href="https://codecademy.com" target="_blank">CodeCademy</a>. Ever since, I've branched out to learn different skills. It is my absolute passion to push myself as I build new projects and explore concepts.</h1>
                    <h1 className="info">Over the months, I've also learned a lot about my workflow. I'm constantly refining the tools I use on a day to day basis, but you can find a full list of everything I use, ranging from Linux Mint to VS Code, over on my <a href="/tools" target="_blank">Tools page</a>.</h1>
                    <h1 className="info">If you'd like to get in touch, feel free to contact me via <a href="/twitter" target="_blank">Twitter</a>, Discord <span>[APixel Visuals#2820]</span>, or plain old email <span>[contact@apixel.me]</span>.</h1>

                </div>

            </div>
        );
    };

    componentDidMount = () => {

        //Titles
        updateTitles(this);
        this.titlesInterval = setInterval(() => updateTitles(this), 1000);
    };

    toggleLolMode = async () => {

        await this.setState({ lolMode: !this.state.lolMode });

        clearInterval(this.titlesInterval);
        this.titlesInterval = setInterval(() => updateTitles(this), this.state.lolMode ? 10 : 1000);
    };

};