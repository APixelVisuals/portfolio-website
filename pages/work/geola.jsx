import React from "react";
import Head from "../../components/Head";
import NavBar from "../../components/NavBar";
import updateTitles from "../../static/updateTitles";
import "../../global.scss";
import "./geola.scss";

export default class Geola extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titles: {
                geola: [null, null, null, null, null]
            }
        };
    };

    render = () => {
        return (
            <div id="work_geola">

                <Head
                    title="Geola - Work - APixel Visuals"
                    description={`Information about my project "Geola"`}
                />
                <NavBar lolMode={this.state.lolMode} toggleLolMode={this.toggleLolMode} />

                <div id="content">

                    <div className="top-margin" />

                    <div className="title">
                        <h1 className="text">{"Geola".split("").map((l, i) => <span className={this.state.titles.geola[i]}>{l}</span>)}</h1>
                    </div>

                    <h1 className="info">Geola is a bot built for the chat application known as "<span>Discord</span>." With its target audience being community owners, it's a bot that's meant to improve engagement within communities, known as "<span>servers</span>."</h1>
                    <h1 className="info">The bot is complete with an online <span>dashboard</span> for users to configure the bot to their liking, so it can be perfectly integrated into their servers.</h1>
                    <h1 className="info">Geola helps out community <span>moderators</span> with their tasks in keeping chats clean by having utility functions to manage users, as well as entire servers, in the sense that it can edit server details.</h1>
                    <h1 className="info">However, Geola also needs to appeal to the average person, not just community owners. It does this by having things like an <span>XP system</span>. As people chat, they gain XP, level up, and earn rewards. Simple, right?</h1>
                    <h1 className="info">Problem is, pretty much everything I've said so far has already been done by other major bots, since it's quite the <span>competitive market</span>. To give Geola a way to stand out, I've made sure to build on these basic features. For example, the XP system doesn't just give you basic rewards, but it also integrates with the bot's other features, such as its <span>custom item system</span>. Users can gain items for servers with a roleplay theme.</h1>
                    <h1 className="info">But even this isn't really enough for a modern Discord bot. Geola packs plenty of other features to help it stand out. I have more information for those interested on its <a href="http://geolabot.com" target="_blank">website</a>.</h1>

                    <a className="project-link-button" href="http://geolabot.com" target="_blank">Visit Geola's Website</a>

                </div>

            </div>
        );
    };

    componentDidMount = () => {

        //Titles
        updateTitles(this);
        this.titlesInterval = setInterval(() => updateTitles(this), 1000);
    };

    toggleLolMode = async () => {

        await this.setState({ lolMode: !this.state.lolMode });

        clearInterval(this.titlesInterval);
        this.titlesInterval = setInterval(() => updateTitles(this), this.state.lolMode ? 10 : 1000);
    };

};