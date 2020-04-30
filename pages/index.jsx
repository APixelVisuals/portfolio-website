import React from "react";
import InlineSVG from "react-inlinesvg";
import Fullpage from "@fullpage/react-fullpage";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import "./index.scss";

export default class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.backgroundVideo = React.createRef();
    };

    render = () => {
        return (
            <div id="index">

                <Head
                    title="APixel Visuals"
                    description="I'm APixel, a Node.js and web developer"
                />
                <NavBar background={this.state.hoveredViewButtonProject} backgroundColor={{ geola: "#009779", personalWebsite: "#31256b" }[this.state.lastHoveredViewButtonProject]} />

                {!this.state.dev && (
                    <div className={`cover-wrapper ${this.state.coverGifDone && "close"}`}>
                        <div className="cover">

                            <img src={this.state.renderCoverLogo && "/assets/apixel-no-loop.gif"} className="logo" onLoad={() => setTimeout(() => this.setState({ coverGifDone: true }), 4200)} />

                        </div>
                    </div>
                )}

                <Fullpage
                    licenseKey="6A08320B-33D44F07-917CAF56-37905EA1"
                    scrollingSpeed={1000}
                    afterLoad={(origin, destination) => {
                        if (destination.index === 0) this.backgroundVideo.current.play();
                    }}
                    render={({ fullpageApi }) => (
                        <Fullpage.Wrapper>

                            <div className="section intro">

                                <div className="background-wrapper">
                                    <video className="background" src="/assets/background.mp4" autoPlay loop ref={this.backgroundVideo} />
                                </div>

                                <div className="content">
                                    <h1 className="title">APixel Visuals</h1>
                                    <p className="description">Hey, I'm APixel, a Node.js and web developer</p>
                                </div>

                                <p className="see-my-work" onClick={() => fullpageApi.moveSectionDown()}>See my work</p>

                            </div>

                            <div className="section project geola">

                                <div className="content">

                                    <div className={`design ${this.state.hoveredViewButtonProject === "geola" && "view-button-hovered"}`}><InlineSVG src="/assets/geola-design.svg" /></div>

                                    <div className="name">
                                        <p className="text">Geola</p>
                                        <a href="/geola" className="view-button-link" onMouseOver={() => this.setState({ hoveredViewButtonProject: "geola", lastHoveredViewButtonProject: "geola" })} onMouseOut={() => this.setState({ hoveredViewButtonProject: null })}><div className="view-button">
                                            <p className="view-button-text">View Project</p>
                                            <div className="arrow"><InlineSVG src="/assets/arrow.svg" /></div>
                                        </div></a>
                                    </div>

                                </div>

                            </div>

                            <div className="section project personal-website">

                                <div className="content">

                                    <div className={`design ${this.state.hoveredViewButtonProject === "personalWebsite" && "view-button-hovered"}`}><InlineSVG src="/assets/personal-website-design.svg" /></div>

                                    <div className="name">
                                        <p className="text">Personal<br />Website</p>
                                        <a href="/personal-website" className="view-button-link" onMouseOver={() => this.setState({ hoveredViewButtonProject: "personalWebsite", lastHoveredViewButtonProject: "personalWebsite" })} onMouseOut={() => this.setState({ hoveredViewButtonProject: null })}><div className="view-button">
                                            <p className="view-button-text">View Project</p>
                                            <div className="arrow"><InlineSVG src="/assets/arrow.svg" /></div>
                                        </div></a>
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

        //Set dev
        if (window.location.hostname === "localhost") this.setState({ dev: true });

        //Render cover logo
        setTimeout(() => this.setState({ renderCoverLogo: true }), 500);
    };

};
