import React, { useState } from "react";
import InlineSVG from "react-inlinesvg";
import styles from "./navBar.module.scss";

export default function NavBar() {

    // State
    const [menuOpen, setMenuOpen] = useState(false);

    // Menu item clicked
    const menuItemClicked = id => {

        // Close menu
        setMenuOpen(false);

        // Scroll
        window.scrollTo({
            top: document.querySelector(`#${id}`).getBoundingClientRect().top + window.pageYOffset - 100,
            behavior: "smooth"
        });
    };

    return (
        <>

            <div className={`${styles.menu} ${menuOpen && styles.menu_open}`}>
                <div className={`${styles.menu_content} ${menuOpen && styles.menu_content_open}`}>

                    <div className={styles.menu_half}>

                        <div className={`${styles.menu_section} ${styles.home}`} onClick={() => menuItemClicked("home")}>
                            <p className={styles.menu_section_text}>Home</p>
                        </div>

                        <div className={`${styles.menu_section} ${styles.about}`} onClick={() => menuItemClicked("about")}>
                            <p className={styles.menu_section_text}>About</p>
                        </div>

                    </div>

                    <div className={styles.menu_half}>

                        <div className={`${styles.menu_section} ${styles.skills}`} onClick={() => menuItemClicked("skills")}>
                            <p className={styles.menu_section_text}>Skills</p>
                        </div>

                        <div className={`${styles.menu_section} ${styles.projects}`} onClick={() => menuItemClicked("projects")}>
                            <p className={styles.menu_section_text}>Projects</p>
                        </div>

                    </div>

                </div>
            </div>

            <div className={styles.navbar}>

                <div className={`${styles.navbar_fill} ${menuOpen && styles.navbar_filled}`} />

                <div className={`${styles.menu_button} ${menuOpen && styles.open}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <div className={styles.line} />
                    <div className={`${styles.line} ${styles.accent}`} />
                    <div className={styles.line} />
                </div>

                <div className={styles.icons}>
                    <a href="/github" target="_blank"><InlineSVG className={`${styles.icon} ${menuOpen && styles.white_icon}`} src="/assets/github.svg" /></a>
                    <a href="/twitter" target="_blank"><InlineSVG className={`${styles.icon} ${menuOpen && styles.white_icon}`} src="/assets/twitter.svg" /></a>
                    <a href="/discord" target="_blank"><InlineSVG className={`${styles.icon} ${menuOpen && styles.white_icon}`} src="/assets/discord.svg" /></a>
                </div>

            </div>

        </>
    );
}