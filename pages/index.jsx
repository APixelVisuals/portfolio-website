import React from "react";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import "../global.css";
import "./index.css";

export default class Index extends React.Component {

    render = () => {
        return (
            <div id="index">

                <Head
                    title="APixel Visuals"
                    description="A description about me goes here lol"
                />
                <NavBar />

            </div>
        );
    };

};