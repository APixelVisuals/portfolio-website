import React from "react";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import updateTitles from "../static/updateTitles";
import "../global.css";
import "./tools.css";

export default class Tools extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titles: {
                myTools: [null, null, null, null, null, null, null, null]
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
                        <h1 className="text">{"My Tools".split("").map((l, i) => <span className={this.state.titles.myTools[i]}>{l}</span>)}</h1>
                    </div>

                    <h1 className="name">Operating System</h1>
                    <h1 className="info">I used to use Windows as my preferred OS, due to its simplicity, as well as the amount of software it had. However, when I was introduced to the UI of Linux Mint, and the fact that just about all the software I used was supported on Linux, I decided to switch. I don't regret anything. Fuck Windows.</h1>

                    <h1 className="name">IDE</h1>
                    <h1 className="info">I remember when I was introduced to Atom. I thought it was amazing with all its extensions and clean design, then I realized that VS Code is where it's at. As I type this in VSC, I'm very happy with my choice of using it. *Skips Spotify track through text editor*</h1>

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