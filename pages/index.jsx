import React from "react";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import "../global.css";
import "./index.css";

export default class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titles: {
                apixel: [null, null, null, null, null, null],
                visuals: [null, null, null, null, null, null, null],
                my: [null, null],
                skillSet: [null, null, null, null, null, null, null, null, null],
            },
            jajascriptEasterEgg: true
        };
    };

    render = () => {
        return (
            <div id="index">

                <Head
                    title="APixel Visuals"
                    description="A description about me goes here lol"
                />
                <NavBar />

                <h1 className="title-speed-button" onClick={this.toggleTitleSpeed}>lol</h1>

                <div className="title-wrapper">

                    <div className="title">
                        <h1 className="text">{"APixel".split("").map((l, i) => <span className={this.state.titles.apixel[i]}>{l}</span>)}</h1>
                        <h1 className="text two">{"Visuals".split("").map((l, i) => <span className={this.state.titles.visuals[i]}>{l}</span>)}</h1>
                    </div>

                    <h1 className="arrows">^ ^ ^</h1>

                </div>

                <div className="skill-set-title">
                    <h1 className="text">{"My".split("").map((l, i) => <span className={this.state.titles.my[i]}>{l}</span>)}</h1>
                    <h1 className="text two">{"Skill Set".split("").map((l, i) => <span className={this.state.titles.skillSet[i]}>{l}</span>)}</h1>
                </div>

                <div className="skill-set">

                    <div className="skill">

                        <h1 className="name javascript">{this.state.jajascriptEasterEgg ? "JajaScript" : "JavaScript"}</h1>
                        <h1 className="info">I learned {this.state.jajascriptEasterEgg ? "JajaScript" : "JavaScript"} as my first programming language on CodeCademy. I find {this.state.jajascriptEasterEgg ? "JajaScript" : "JavaScript"} to be really fun to work with on the front-end and also the back-end, specifically with Node.JS.</h1>

                    </div>

                    <div className="skill">

                        <h1 className="name html-css">HTML/CSS</h1>
                        <h1 className="info">HTML and CSS are essential for front-end. How else do you expect to build a website? While we all goddamn hate CSS, it's still the standard and with good reason. Oh and HTML isn't a real language &gt;:(</h1>

                    </div>

                    <div className="skill">

                        <h1 className="name react">React</h1>
                        <h1 className="info">React is absolutely amazing. It's the one good thing Facebook has brought into this world. If I'm gonna build a website, I'll probably build it with React because plain HTML is painful.</h1>

                    </div>

                    <div className="skill">

                        <h1 className="name mongodb">MongoDB</h1>
                        <h1 className="info">MongoDB is just great. Without document-based databases I'd be stuck with MySQL. MongoDB is just so easy to use (aside from their shitty official GUI for it), and Mongoose, the Node.JS MongoDB ODM, just makes it that much better.</h1>

                    </div>

                    <div className="skill">

                        <h1 className="name mysql">MySQL</h1>
                        <h1 className="info">I mean, it's nice. Tables are cool, I just prefer document-based NoSQL databases. Don't get me wrong, RDBMS databases are still useful, and I'm perfectly fine with working with them, it's just not my jam. Still neat though lol.</h1>

                    </div>

                    <div className="skill">

                        <h1 className="name git">Git</h1>
                        <h1 className="info">What kinda developer doesn't use Git? IMO, it's essential for just about any project. Git is great at what it does, since it's a very mature system. Ooh! Almost forgot to plug my GitHub! Check it out :)</h1>

                    </div>

                    <div className="skill">

                        <h1 className="name linux">Linux</h1>
                        <h1 className="info">My VPS runs Linux. I mean, what else is it gonna run? Mac? Lmao, right. More specifically, it runs Ubuntu. I think I'm pretty good at managing a Linux server. Also, I use Linux Mint as my daily driver on my PC. It makes me hate Windows. That's a good thing.</h1>

                    </div>

                </div>

            </div>
        );
    };

    componentDidMount = () => {

        //Titles
        this.updateTitles();
        this.titlesIntervalSpeed = 1000;
        this.titlesInterval = setInterval(this.updateTitles, this.titlesIntervalSpeed);

        //JajaScript Easter Egg
        setTimeout(() => this.setState({ jajascriptEasterEgg: false }), 100);
    };

    updateTitles = () => {

        //Get letters
        const getLetters = () => {
            const letters = ["a", "b", "c"];
            return letters[Math.floor(Math.random() * letters.length)]
        };

        //Set letters
        this.state.titles.apixel = this.state.titles.apixel.map(getLetters);
        this.state.titles.visuals = this.state.titles.visuals.map(getLetters);
        this.state.titles.my = this.state.titles.my.map(getLetters);
        this.state.titles.skillSet = this.state.titles.skillSet.map(getLetters);

        //Update
        this.forceUpdate();
    };

    toggleTitleSpeed = () => {
        clearInterval(this.titlesInterval);
        const titlesIntervalSpeeds = [1000, 100, 10];
        this.titlesIntervalSpeed = titlesIntervalSpeeds[titlesIntervalSpeeds.indexOf(this.titlesIntervalSpeed) + 1];
        if (!this.titlesIntervalSpeed) this.titlesIntervalSpeed = titlesIntervalSpeeds[0];
        this.titlesInterval = setInterval(this.updateTitles, this.titlesIntervalSpeed);
    };

};