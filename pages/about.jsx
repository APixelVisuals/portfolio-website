import React from "react";
import Fullpage from "@fullpage/react-fullpage";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import "./about.scss";

export default class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = { section: "intro" };
        this.backgroundVideo = React.createRef();
    };

    render = () => {
        return (
            <div id="about">

                <Head
                    title="About - APixel Visuals"
                    description="I'm APixel, a Node.js and web developer"
                />
                <NavBar />

                <div className="background-wrapper">

                    <video className="video" src="/assets/background.mp4" autoPlay loop ref={this.backgroundVideo} />

                    <div className={`background intro ${this.state.section === "intro" && "enabled"}`} />
                    <div className={`background nodejs ${this.state.section === "nodejs" && "enabled"}`} />
                    <div className={`background web-development ${this.state.section === "webDevelopment" && "enabled"}`} />
                    <div className={`background databases ${this.state.section === "databases" && "enabled"}`} />
                    <div className={`background statistics ${this.state.section === "statistics" && "enabled"}`} />
                    <div className={`background miscellaneous-skills ${this.state.section === "miscellaneousSkills" && "enabled"}`} />

                </div>

                <Fullpage
                    licenseKey="6A08320B-33D44F07-917CAF56-37905EA1"
                    scrollingSpeed={1000}
                    scrollOverflow={true}
                    onLeave={(origin, destination) => this.setState({ section: ["intro", "nodejs", "webDevelopment", "databases", "statistics", "miscellaneousSkills"][destination.index] })}
                    render={() => (
                        <Fullpage.Wrapper>

                            <div className="section">

                                <img src="/assets/apixel.gif" className="avatar" />

                                <h1 className="title">APixel Visuals</h1>

                                <p className="description">Hey, I'm APixel and I'm a hobbyist Node.js and web developer</p>

                            </div>

                            <div className="section">
                                <div className="section-inner">

                                    <div className="content">

                                        <div className="name">
                                            <img src="/assets/nodejs.svg" className="icon" />
                                            <p className="name-text">Node.js</p>
                                        </div>

                                        <p className="text">With over three years of experience in Node.js, I've learned how to create basic web servers, use <a href="https://nextjs.org" target="_blank" className="nodejs">Next.js</a>, as well as create miscellaneous applications.</p>
                                        <p className="text">My first project, <a href="https://geolabot.com" target="_blank" className="nodejs">Geola</a>, that I still work on from time to time, is a <a href="https://discord.com" target="_blank" className="nodejs">Discord</a> bot written using <a href="https://discord.js.org" target="_blank" className="nodejs">discord.js</a>. I have quite a bit of experience writing Discord bots, and I talk all about what working on Geola has taught me <a href="/geola" className="nodejs">here</a>.</p>
                                        <p className="text">Another skill I've picked up with Node.js is image processing. My preferred set of libraries include <a href="https://github.com/lovell/sharp" target="_blank" className="nodejs">sharp</a> for basic image processing, <a href="https://github.com/tkrkt/text2png" target="_blank" className="nodejs">text2png</a> for adding text, and I also find that <a href="https://github.com/evidentpoint/buffer-image-size" target="_blank" className="nodejs">buffer-image-size</a> goes well with text2png in order to help with positioning.</p>

                                    </div>

                                </div>
                            </div>

                            <div className="section">
                                <div className="section-inner">

                                    <div className="content">

                                        <div className="name">
                                            <img src="/assets/html.svg" className="icon" />
                                            <p className="name-text">Web Development</p>
                                        </div>

                                        <p className="text">I've been making websites for over three years, and have learned how to use <a href="https://reactjs.org" target="_blank" className="web-development">React</a>, <a href="https://nextjs.org" target="_blank" className="web-development">Next.js</a>, as well as <a href="https://sass-lang.com" target="_blank" className="web-development">SCSS</a>.</p>
                                        <p className="text">My first website was for my project <a href="https://geolabot.com" target="_blank" className="web-development">Geola</a>, and it was made in plain HTML and CSS. I've since rewritten it in React and Next.js. My <a href="/personal-website" className="web-development">personal website</a>, is an example of a more fun website with lots of colors and animations.</p>

                                    </div>

                                </div>
                            </div>

                            <div className="section">
                                <div className="section-inner">

                                    <div className="content">

                                        <div className="name">
                                            <img src="/assets/database.svg" className="icon" />
                                            <p className="name-text">Databases</p>
                                        </div>

                                        <p className="text">I've worked with both RDBMS and NoSQL databases, specifically <a href="https://mysql.com" target="_blank" className="databases">MySQL</a> and <a href="https://mongodb.com" target="_blank" className="databases">MongoDB</a>. My first project, <a href="https://geolabot.com" target="_blank" className="databases">Geola</a> used MySQL, but I later switched to MongoDB since I found that it made more sense for that project.</p>
                                        <p className="text">I also have experience with basic MySQL and MongoDB administration, and can fully deploy a database.</p>

                                    </div>

                                </div>
                            </div>

                            <div className="section">
                                <div className="section-inner">

                                    <div className="content">

                                        <div className="name">
                                            <img src="/assets/graph.svg" className="icon" />
                                            <p className="name-text">Statistics</p>
                                        </div>

                                        <p className="text">I use <a href="https://influxdata.com/products/influxdb-overview" target="_blank" className="statistics">InfluxDB</a> to store statistics and usage data about my apps. InfluxDB's write-optimized nature is perfect for this task and its Flux query language is a powerful tool that can be used to query and display data using <a href="https://grafana.com" target="_blank" className="statistics">Grafana</a>.</p>

                                    </div>

                                </div>
                            </div>

                            <div className="section">
                                <div className="section-inner">

                                    <div className="content">

                                        <div className="name">
                                            <img src="/assets/puzzle-piece.svg" className="icon" />
                                            <p className="name-text">Miscellaneous Skills</p>
                                        </div>

                                        <p className="text">I also have some experience with <a href="https://adobe.com/products/photoshop.html" target="_blank" className="miscellaneous-skills">Adobe Photoshop</a> and <a href="https://adobe.com/products/illustrator.html" target="_blank" className="miscellaneous-skills">Illustrator</a>, which enables me to make assets for projects myself.</p>
                                        <p className="text">I also know some <a href="https://adobe.com/products/aftereffects.html" target="_blank" className="miscellaneous-skills">Adobe After Effects</a>, which I've used to make animated assets for my projects, including the background of this page.</p>

                                    </div>

                                </div>
                            </div>

                        </Fullpage.Wrapper>
                    )}
                />

            </div>
        );
    };

    componentDidMount = () => {

        //Play background video
        this.backgroundVideo.current.play();
    };

};
