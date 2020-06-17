import React from "react";
import Fullpage from "@fullpage/react-fullpage";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import "./projects.scss";

export default class PersonalWebsite extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    };

    render = () => {
        return (
            <div id="projects" className="personal-website">

                <Head
                    title="Personal Website - APixel Visuals"
                    description="My personal website is where I showcase my work"
                />
                <NavBar />

                <Fullpage
                    licenseKey="6A08320B-33D44F07-917CAF56-37905EA1"
                    scrollingSpeed={1000}
                    render={() => (
                        <Fullpage.Wrapper>

                            <div className="section">

                                <img src="https://apixel.me/assets/apixel.gif" className="icon" />

                                <h1 className="title">Personal Website</h1>

                                <p className="description">For showcasing my work</p>

                            </div>

                            <div className="section">

                                <div className="content">

                                    <p className="name">Intro</p>

                                    <p className="text">This website is where I showcase my work, link my social media, and provide a way to <a href="/contact" target="_blank">contact me</a>.</p>
                                    <p className="text">Since this website isn't part of a large project, working on it has given me a chance to play around with website layout and design. I can change parts of it without worrying about breaking things and show what I'm capable of.</p>

                                </div>

                            </div>

                            <div className="section">

                                <div className="content">

                                    <p className="name">Tech Stack</p>

                                    <p className="text">Since this website is a static site, its tech stack is pretty simple. It's written in <a href="https://reactjs.org" target="_blank">React</a> and <a href="https://nextjs.org" target="_blank">Next.js</a>, and it's fully open source on <a href="https://github.com/APixelVisuals/apixel-website" target="_blank">GitHub</a>.</p>

                                </div>

                            </div>

                            <div className="section">

                                <div className="content">

                                    <p className="name">Deployment</p>

                                    <p className="text">I host this website on an Ubuntu server on <a href="https://m.do.co/c/df0baa1472d8" target="_blank">DigitalOcean</a>, with <a href="https://pm2.keymetrics.io" target="_blank">PM2</a> managing the process. Since I have multiple projects on my server, I use <a href="https://nginx.com" target="_blank">Nginx</a> server blocks to route traffic to the correct express server for the website and <a href="https://letsencrypt.org" target="_blank">Let's Encrypt</a> to secure my website with an SSL certificate.</p>

                                </div>

                            </div>

                        </Fullpage.Wrapper>
                    )}
                />

            </div>
        );
    };

};
