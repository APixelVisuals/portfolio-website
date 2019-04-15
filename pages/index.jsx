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
                my2: [null, null],
                work: [null, null, null, null]
            },
            jajascriptEasterEgg: true,
            lolMode: false
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

                <h1 className="lol-mode-button" onClick={this.toggleLolMode}>lol</h1>

                <div className="title-wrapper">

                    <div className="title">
                        <h1 className="text">{"APixel".split("").map((l, i) => <span className={this.state.titles.apixel[i]}>{l}</span>)}</h1>
                        <h1 className="text two">{"Visuals".split("").map((l, i) => <span className={this.state.titles.visuals[i]}>{l}</span>)}</h1>
                    </div>

                    <h1 className={`arrows ${this.state.lolMode && "fast"}`}>^ ^ ^</h1>

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

                <div className="work-title">
                    <h1 className="text">{"My".split("").map((l, i) => <span className={this.state.titles.my2[i]}>{l}</span>)}</h1>
                    <h1 className="text two">{"Work".split("").map((l, i) => <span className={this.state.titles.work[i]}>{l}</span>)}</h1>
                </div>

                <div className="work-wrapper">

                    <div className="work">

                        <a className="name geola" href="/work/geola" target="_blank">Geola</a>
                        <h1 className="info">Geola is a bot built on the chat application Discord. It's used by community owners to encourage activity from their members, and can also be used to manage communities.</h1>

                    </div>

                    <div className="work">

                        <a className="name apixel-visuals" href="/work/apixel-visuals" target="_blank">APixel Visuals</a>
                        <h1 className="info">My website (yes — this one) is where I showcase my skills, work, and whatever else I decide to put on here.</h1>

                    </div>

                </div>

            </div>
        );
    };

    componentDidMount = () => {

        //Titles
        this.updateTitles();
        this.titlesInterval = setInterval(this.updateTitles, 1000);

        //JajaScript Easter Egg
        setTimeout(() => this.setState({ jajascriptEasterEgg: false }), 100);
    };

    updateTitles = () => {

        //Get letters
        const getLetters = () => {
            const letters = ["a", "b", "c"];
            return letters[Math.floor(Math.random() * letters.length)];
        };

        //Set letters
        this.state.titles.apixel = this.state.titles.apixel.map(getLetters);
        this.state.titles.visuals = this.state.titles.visuals.map(getLetters);
        this.state.titles.my = this.state.titles.my.map(getLetters);
        this.state.titles.skillSet = this.state.titles.skillSet.map(getLetters);
        this.state.titles.my2 = this.state.titles.my2.map(getLetters);
        this.state.titles.work = this.state.titles.work.map(getLetters);

        //Update
        this.forceUpdate();
    };

    toggleLolMode = async () => {

        await this.setState({ lolMode: !this.state.lolMode });

        clearInterval(this.titlesInterval);
        this.titlesInterval = setInterval(this.updateTitles, this.state.lolMode ? 10 : 1000);
    };

};