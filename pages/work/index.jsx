import React from "react";
import Head from "../../components/Head";
import NavBar from "../../components/NavBar";
import updateTitles from "../../static/updateTitles";
import "../../global.css";
import "./index.css";

export default class Work extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titles: {
                myWork: [null, null, null, null, null, null, null]
            }
        };
    };

    render = () => {
        return (
            <div id="work">

                <Head
                    title="Work - APixel Visuals"
                    description="A little showcase for all my projects"
                />
                <NavBar lolMode={this.state.lolMode} toggleLolMode={this.toggleLolMode} />

                <div id="content">

                    <div className="top-margin" />

                    <div className="title">
                        <h1 className="text">{"My Work".split("").map((l, i) => <span className={this.state.titles.myWork[i]}>{l}</span>)}</h1>
                    </div>

                    <a className="name geola" href="/work/geola">Geola</a>
                    <h1 className="info">The premium-grade Discord bot</h1>

                    <a className="name apixel-visuals" href="/work/apixel-visuals">APixel Visuals</a>
                    <h1 className="info">Literally just this site. There's no slogan</h1>

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