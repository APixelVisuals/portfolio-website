import React from "react";
import Head from "../../components/Head";
import NavBar from "../../components/NavBar";
import updateTitles from "../../static/updateTitles";
import "./apixel-visuals.scss";

export default class APixelVisuals extends React.Component {

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
            <div id="work_apixel-visuals">

                <Head
                    title="My Website - Work - APixel Visuals"
                    description={`Information about my website, as a project`}
                />
                <NavBar lolMode={this.state.lolMode} toggleLolMode={this.toggleLolMode} />

                <div id="content">

                    <div className="top-margin" />

                    <div className="title">
                        <h1 className="text">{"APixel Visuals".split("").map((l, i) => <span className={this.state.titles.apixelVisuals[i]}>{l}</span>)}</h1>
                    </div>

                    <h1 className="info">I made this website mainly to <span>showcase</span> my work to potential clients (maybe that's <span>you</span>?), as well as anyone else who might be interested in the things I make.</h1>
                    <h1 className="info">One thing I love about this website is that it's my own. That means that I can add a bunch of <span>Easter eggs</span> around it. Seriously, it's actually kinda fun making them.</h1>
                    <h1 className="info">Also I felt left out that everyone else has a website and I didn't lol.</h1>

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