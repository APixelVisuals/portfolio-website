import React from "react";
import Fullpage from "@fullpage/react-fullpage";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import "./projects.scss";

export default class Geola extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    };

    render = () => {
        return (
            <div id="projects" className="geola">

                <Head
                    title="Geola - APixel Visuals"
                    description="Geola, my first project, is a premium-grade Discord bot"
                />
                <NavBar />

                <Fullpage
                    licenseKey="6A08320B-33D44F07-917CAF56-37905EA1"
                    scrollingSpeed={1000}
                    render={() => (
                        <Fullpage.Wrapper>

                            <div className="section">

                                <img src="https://geolabot.com/static/geola-gif.gif" className="icon" />

                                <h1 className="title">Geola</h1>

                                <p className="description">The premium-grade Discord bot</p>

                            </div>

                            <div className="section">

                                <div className="content">

                                    <p className="name">Intro</p>

                                    <p className="text"><a href="https://geolabot.com" target="_blank">Geola</a> is a <a href="https://discord.com" target="_blank">Discord</a> bot with various features to help people who maintain servers.</p>
                                    <p className="text">Working on Geola has taught me a lot about creating a full stack project. Not only does it involve a frontend, backend, and database, but it also integrates with APIs and has a rich dashboard.</p>

                                </div>

                            </div>

                            <div className="section">

                                <div className="content">

                                    <p className="name">Tech Stack</p>

                                    <p className="text">Geola is a <a href="https://nodejs.org" target="_blank">Node.js</a> application that's hosted on <a href="https://m.do.co/c/df0baa1472d8" target="_blank">DigitalOcean</a>. The website is written in <a href="https://reactjs.org" target="_blank">React</a> and <a href="https://nextjs.org" target="_blank">Next.js</a>, and the backend is an express server. <a href="https://mongodb.com" target="_blank">MongoDB</a> is used for data storage, since its document-based structure is convenient for my use case.</p>

                                </div>

                            </div>

                            <div className="section">

                                <div className="content">

                                    <p className="name">Integrating with Discord</p>

                                    <p className="text">Geola is written using <a href="https://discord.js.org" target="_blank">discord.js</a>, a library that makes it easier to interact with the Discord API. Logging in to the online dashboard is also handled by Discord using OAuth.</p>

                                </div>

                            </div>

                            <div className="section">

                                <div className="content">

                                    <p className="name">The Dashboard</p>

                                    <p className="text">The dashboard is the bulk of the website, and it's where users can customize the bot to their needs. React components have proven to be especially useful while building the dashboard since it makes reusing custom inputs easier and more convenient.</p>

                                </div>

                            </div>

                            <div className="section">

                                <div className="content">

                                    <p className="name">MongoDB</p>

                                    <p className="text">I use <a href="https://mongodb.com" target="_blank">MongoDB</a> for a data storage solution since its document-based structure fits into the object-oriented nature of the project. The fact that data is stored as an object makes it easy to query data, even if it's nested. I also use <a href="https://mongoosejs.com" target="_blank">Mongoose</a> since it implements schemas while also making interaction with the database a lot easier.</p>

                                </div>

                            </div>

                            <div className="section">

                                <div className="content">

                                    <p className="name">Deployment</p>

                                    <p className="text">Geola runs on an Ubuntu server hosted on <a href="https://m.do.co/c/df0baa1472d8" target="_blank">DigitalOcean</a>. I use <a href="https://pm2.keymetrics.io" target="_blank">PM2</a> to manage processes since it's basic yet customizable. Since I have multiple projects on my server, I use <a href="https://nginx.com" target="_blank">Nginx</a> server blocks to route traffic to the correct express server for the website and <a href="https://letsencrypt.org" target="_blank">Let's Encrypt</a> to secure my website with an SSL certificate.</p>

                                </div>

                            </div>

                        </Fullpage.Wrapper>
                    )}
                />

            </div>
        );
    };

};
