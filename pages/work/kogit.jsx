import React from "react";
import Head from "../../components/Head";
import NavBar from "../../components/NavBar";
import updateTitles from "../../static/updateTitles";
import "./kogit.scss";

export default class Kogit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titles: {
                kogit: [null, null, null, null, null]
            }
        };
    };

    render = () => {
        return (
            <div id="work_kogit">

                <Head
                    title="Kogit - Work - APixel Visuals"
                    description={`Information about my project "Kogit"`}
                />
                <NavBar lolMode={this.state.lolMode} toggleLolMode={this.toggleLolMode} />

                <div id="content">

                    <div className="top-margin" />

                    <div className="title">
                        <h1 className="text">{"Kogit".split("").map((l, i) => <span className={this.state.titles.kogit[i]}>{l}</span>)}</h1>
                    </div>

                    <h1 className="info">Kogit is a small CLI application I made that's fully written in <span>Bash</span>. What it does is simple. You feed it a <span>GitHub repo</span>, and it spits out information about said repo. But it doesn't just vomit out a slightly distorted version of what the GitHub API gave it, it instead prints it out in a <span>visually appealing</span> way.</h1>
                    <h1 className="info">It's actually inspired by <a href="https://github.com/dylanaraps/neofetch" target="_blank">Neofetch</a>. <span>Neofetch</span> is a bash script that prints out your system details in a fancy way. <span>Dylan</span>, the guy behind Neofetch, is clearly a hard working guy.</h1>
                    <h1 className="info">Kogit is actually my first Bash script, so I've learned a ton from making it. Not only have I strengthened my knowledge of bash, but I've also learned how to create and use <span>Makefiles</span> (they're super useful).</h1>

                    <a className="project-link-button" href="https://github.com/APixelVisuals/kogit" target="_blank">Visit Kogit's GitHub Repo</a>

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