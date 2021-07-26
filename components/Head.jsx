import React from "react";
import NextHead from "next/head";

export default function Head(props) {
    return (
        <NextHead>

            <title>{props.title}</title>
            <meta name="description" content={props.description} />

            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1 minimum-scale=1" />
            <meta name="theme-color" content="#66b4f8" />
            <link rel="shortcut icon" href="/assets/favicon.ico" />

            {props.redirect && <meta httpEquiv="refresh" content={`0; url=${props.redirect}`} />}

        </NextHead>
    );
}