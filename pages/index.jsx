import React from "react";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import "../global.css";
import "./index.css";

export default class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = { jajascriptEasterEgg: true };
    };

    render = () => {
        return (
            <div id="index">

                <Head
                    title="APixel Visuals"
                    description="A description about me goes here lol"
                />
                <NavBar />

                <div className="title-wrapper">

                    <div className="title">
                        <h1 className="text">A<span>Pi</span>xel</h1>
                        <h1 className="text two">Vis<span>u</span>als</h1>
                    </div>

                    <h1 className="arrows">^ ^ ^</h1>

                </div>

                <div className="skill-set-title">
                    <h1 className="text"><span className="a">My</span></h1>
                    <h1 className="text">S<span className="b">k</span>i<span className="c">ll</span> Set</h1>
                </div>

                <div className="skill-set">

                    <div className="skill">

                        <h1 className="name javascript">{this.state.jajascriptEasterEgg ? "JajaScript" : "JavaScript"}</h1>
                        <h1 className="info">I learned JavaScript as my first programming language on CodeCademy. I find JavaScript to be really fun to work with on the front-end and also the back-end, specifically with Node.JS.</h1>

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
        setTimeout(() => this.setState({ jajascriptEasterEgg: false }), 100);
    };

};