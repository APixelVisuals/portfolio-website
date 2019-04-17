import React from "react";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import updateTitles from "../static/updateTitles";
import "../global.css";
import "./accomplishments.css";

export default class Accomplishments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titles: {
                accomplishments: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
            }
        };
    };

    render = () => {
        return (
            <div id="accomplishments">

                <Head
                    title="Accomplishments - APixel Visuals"
                    description="A timeline of my accomplishments"
                />
                <NavBar lolMode={this.state.lolMode} toggleLolMode={this.toggleLolMode} />

                <div id="content">

                    <div className="title">
                        <h1 className="text">{"Accomplishments".split("").map((l, i) => <span className={this.state.titles.accomplishments[i]}>{l}</span>)}</h1>
                    </div>

                    <div className="timeline">

                        <div className="line"></div>

                        <div className="accomplishment">
                            <h1 className="date">April 12, 2019</h1>
                            <h1 className="info">I deployed my project <a href="/work/geola" target="_blank">Geola</a>'s website on my VPS (instead of having it hosted by <a href="https://namecheap.com" target="_blank">NameCheap</a>, my domain name provider).</h1>
                        </div>

                        <div className="accomplishment right">
                            <h1 className="date">April 4, 2019</h1>
                            <h1 className="info">I dual-booted Linux Mint with my Windows 10 machine and started using Linux as my daily driver. It's amazing.</h1>
                        </div>

                        <div className="accomplishment">
                            <h1 className="date">March 13, 2019</h1>
                            <h1 className="info">I learned Next.JS so my website could take advantage of server-side rendering, as well as custom routing.</h1>
                        </div>

                        <div className="accomplishment right">
                            <h1 className="date">March 7, 2019</h1>
                            <h1 className="info">I learned React.JS and was quite excited with the fact that I didn't have to write plain HTML anymore.</h1>
                        </div>

                        <div className="accomplishment">
                            <h1 className="date">January 27, 2019</h1>
                            <h1 className="info">I learned Git (while struggling way too much) and open-sourced my first project, <a href="/work/geola" target="_blank">Geola</a>, <a href="https://github.com/APixelVisuals/geola" target="_blank">on GitHub</a>.</h1>
                        </div>

                        <div className="accomplishment right">
                            <h1 className="date">October 29, 2018</h1>
                            <h1 className="info">I learned MongoDB and Mongoose and set up a MongoDB database on my VPS.</h1>
                        </div>

                        <div className="accomplishment">
                            <h1 className="date">November 9, 2017</h1>
                            <h1 className="info">I set up a <a href="https://m.do.co/c/df0baa1472d8" target="_blank">DigitalOcean</a> VPS and deployed my <a href="/work/geola" target="_blank">first Node.JS app</a>.</h1>
                        </div>

                        <div className="accomplishment right">
                            <h1 className="date">June 21, 2017</h1>
                            <h1 className="info">I learned HTML and CSS on <a href="https://codecademy.com" target="_blank">CodeCademy</a> and made my first website.</h1>
                        </div>

                        <div className="accomplishment">
                            <h1 className="date">May 29, 2017</h1>
                            <h1 className="info">I learned MySQL and set up my first database on my local machine. I also learned how to use MySQL Workbench.</h1>
                        </div>

                        <div className="accomplishment right">
                            <h1 className="date">May 18, 2017</h1>
                            <h1 className="info">I learned JavaScript on <a href="https://codecademy.com" target="_blank">CodeCademy</a> and started work on my <a href="/work/geola" target="_blank">first project</a>.</h1>
                        </div>

                    </div>

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