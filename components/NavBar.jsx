import React from "react";
import Tooltip from "react-tooltip";
import InlineSVG from "react-inlinesvg";
import "./navBar.scss";

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    };

    render = () => {
        return (
            <div id="nav-bar">

                <Tooltip />

                <div className={`nav-bar-wrapper ${this.state.menuOpen && "menu"}`}>

                    <div className={`nav-bar-background ${this.props.background && "displayed"}`} style={{ backgroundColor: this.props.backgroundColor }} />

                    <div className="bar">

                        <div className="menu-button" onClick={() => this.setState({ menuOpen: !this.state.menuOpen })}>
                            <div className={`line line-1 ${this.state.menuOpen && "cross"}`} />
                            <div className={`line line-2 ${this.state.menuOpen && "cross"}`} />
                            <div className={`line line-3 ${this.state.menuOpen && "cross"}`} />
                        </div>

                        <div className="links">
                            <a href="/twitter" className="link twitter"><InlineSVG src="/assets/twitter.svg" /></a>
                            <a href="/github" className="link github"><InlineSVG src="/assets/github.svg" /></a>
                            <div className="link discord"><span data-tip="APixel Visuals#2820" data-effect="solid" data-class="tooltip" onMouseOver={Tooltip.rebuild}><InlineSVG src="/assets/discord.svg" /></span></div>
                            <div className="link email"><span data-tip="apixelvisualsofficial@gmail.com" data-effect="solid" data-class="tooltip" onMouseOver={Tooltip.rebuild}><InlineSVG src="/assets/envelope.svg" /></span></div>
                        </div>

                    </div>

                    {this.state.menuOpen && (
                        <div className="menu-content">

                            <div className="links menu">
                                <a href="/twitter" className="link twitter"><InlineSVG src="/assets/twitter.svg" /></a>
                                <a href="/github" className="link github"><InlineSVG src="/assets/github.svg" /></a>
                                <div className="link discord"><span data-tip="APixel Visuals#2820" data-effect="solid" data-class="tooltip" onMouseOver={Tooltip.rebuild}><InlineSVG src="/assets/discord.svg" /></span></div>
                                <div className="link email"><span data-tip="apixelvisualsofficial@gmail.com" data-effect="solid" data-class="tooltip" onMouseOver={Tooltip.rebuild}><InlineSVG src="/assets/envelope.svg" /></span></div>
                            </div>

                            <div className="menu-items">

                                <div className="menu-item-background-wrapper">
                                    <video className="menu-item-background" src="/assets/background.mp4" autoPlay loop />
                                </div>

                                <a href="/" className="menu-item-link"><div className="menu-item">
                                    <p className="menu-item-text">Work</p>
                                </div></a>
                                <a href="/about" className="menu-item-link"><div className="menu-item">
                                    <p className="menu-item-text">About</p>
                                </div></a>

                            </div>

                        </div>
                    )}

                </div>

            </div>
        );
    };

};