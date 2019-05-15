import React from "react";
import "../global.css";
import "./navBar.css";

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { menuOpen: false };
        this.updateSocialTagY = e => this.setState({ socialTagY: e.clientY - 18 });
    };

    render = () => {
        return (
            <div id="nav-bar">

                <a className={`home-button ${this.props.lolMode && "forceGif"}`} href="/"><img src="/static/apixel.png" /></a>

                <h1 className="lol-mode-button" onClick={this.props.toggleLolMode}>lol</h1>

                <div className="bar">
                    <a className="button" href="/">🏠</a>
                    <a className="button" href="/about">About</a>
                    <a className="button" href="/tools">Tools</a>
                    <a className="button" href="/work">Work</a>
                    <a className="button" href="/accomplishments">Accomplishments</a>
                </div>

                <div className="bar mobile">
                    <a className="button" href="/">🏠</a>
                    <a className="button menu-button" onClick={() => this.setState({ menuOpen: true })}>Menu</a>
                </div>

                <div className={`menu ${this.state.menuOpen && "open"}`}>

                    <h1 className="menu-close-button" onClick={() => this.setState({ menuOpen: false })}>x</h1>

                    <a className="menu-button" href="/">🏠</a>
                    <a className="menu-button" href="/about">About</a>
                    <a className="menu-button" href="/tools">Tools</a>
                    <a className="menu-button" href="/work">Work</a>
                    <a className="menu-button" href="/accomplishments">Accomplishments</a>

                </div>

                <div className="side-bar">
                    <a className="button" onMouseOver={() => this.setState({ socialTag: true, socialTagText: "apixelvisualsofficial@gmail.com" })} onMouseOut={() => this.setState({ socialTag: false })}>Email</a>
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