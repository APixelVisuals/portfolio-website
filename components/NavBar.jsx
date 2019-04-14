import React from "react";
import "../global.css";
import "./navBar.css";

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.updateSocialTagY = e => this.setState({ socialTagY: e.clientY - 18 });
    };

    render = () => {
        return (
            <div id="nav-bar">

                <a className="home-button" href="/"><img src="/static/apixel.png" /></a>

                <div className="bar">
                    <a className="button" href="/">🏠</a>
                    <a className="button" href="/about">About</a>
                    <a className="button" href="/skill-set">Skill Set</a>
                    <a className="button" href="/work">Work</a>
                </div>

                <div className="side-bar">
                    <a className="button" onMouseOver={() => this.setState({ socialTag: true, socialTagText: "contact@idkyet.com" })} onMouseOut={() => this.setState({ socialTag: false })}>Email</a>
                    <a className="button" href="/twitter" target="_blank">Twitter</a>
                    <a className="button" onMouseOver={() => this.setState({ socialTag: true, socialTagText: "APixel Visuals#2820" })} onMouseOut={() => this.setState({ socialTag: false })}>Discord</a>
                    <a className="button" href="/github" target="_blank">GitHub</a>
                </div>

                <div className="social-tag" style={{ opacity: this.state.socialTag && "1", top: `${this.state.socialTagY}px` }}>
                    <h1>{this.state.socialTagText}</h1>
                </div>

            </div>
        );
    };

    componentDidMount = () => document.addEventListener("mousemove", this.updateSocialTagY);
    componentWillUnmount = () => document.removeEventListener("mousemove", this.updateSocialTagY);

};