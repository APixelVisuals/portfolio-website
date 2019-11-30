import React from "react";
import Head from "../../components/Head";
import NavBar from "../../components/NavBar";
import updateTitles from "../../static/updateTitles";
import "./index.scss";

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
                    <h1 className="info">Geola is a bot built on the chat application Discord. It's used by community owners to encourage activity from their members, and can also be used to manage communities.</h1>

                    <a className="name apixel-visuals" href="/work/apixel-visuals">APixel Visuals</a>
                    <h1 className="info">My website (yes — this one) is where I showcase my skills, work, and whatever else I decide to put on here.</h1>

                    <a className="name kogit" href="/work/kogit">Kogit</a>
                    <h1 className="info">Kogit is a small CLI application written fully in Bash. Its goal is to get information about a given GitHub repository and display its details in a pleasing manner.</h1>

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