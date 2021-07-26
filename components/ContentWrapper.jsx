import React from "react";
import NavBar from "./NavBar";
import styles from "./contentWrapper.module.scss";

export default function ContentWrapper(props) {
    return (
        <>

            <NavBar />

            <div className={styles.content}>{props.children}</div>

        </>
    );
}