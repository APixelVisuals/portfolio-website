import ContentWrapper from "../components/ContentWrapper";
import Head from "../components/Head";
import styles from "./index.module.scss";

const skills = [
    {
        name: "Node.js",
        icon: "nodejs",
        amount: 100
    },
    {
        name: "React",
        icon: "react",
        amount: 90
    },
    {
        name: "MongoDB",
        icon: "mongodb",
        amount: 85
    },
    {
        name: "Express",
        icon: "express",
        amount: 75
    },
    {
        name: "TypeScript",
        icon: "typescript",
        amount: 70
    },
    {
        name: "Deployment",
        icon: "server",
        amount: 40
    }
];

const projects = [
    {
        name: "Illustra",
        icon: "illustra",
        description: "Illustra is an object-oriented, document based Node.js image processing toolkit",
        link: "https://illustra.pranav.page"
    },
    {
        name: "Aeracord",
        icon: "aeracord",
        description: "Aeracord is a lightweight library for the Discord API with flexible caching",
        link: "https://aeracord.pranav.page"
    },
    {
        name: "GitBound",
        icon: "gitbound",
        description: "GitBound sends activity from GitHub repos to other integrations",
        link: "https://gitbound.com"
    },
    {
        name: "Geola",
        icon: "geola",
        description: "A multipurpose Discord bot",
        link: "https://geolabot.com"
    }
];

export default function Index() {
    return (
        <div>

            <Head
                title="Pranav Bagade"
                description="I'm a Node.js and web developer"
            />

            <ContentWrapper>

                <div id="home" className={styles.intro}>

                    <div className={styles.header}>

                        <img className={styles.avatar} src="/assets/avatar.png" alt="Avatar image" />

                        <div className={styles.name}>
                            <p className={styles.greeting}>Hey, I'm</p>
                            <h1 className={styles.first_name}>Pranav</h1>
                            <h1 className={styles.last_name}>Bagade</h1>
                        </div>

                    </div>

                    <p className={styles.description}>I'm a Node.js and web developer</p>

                </div>

                <div id="about" className={styles.section}>

                    <h2 className={styles.title}>About <span>Me</span></h2>

                    <p className={styles.text}>I'm a hobbyist developer with experience in <span className={styles.highlight}>Node.js</span>, <span className={styles.highlight}>Express</span>, and <span className={styles.highlight}>React</span>.</p>
                    <p className={styles.text}>I started programming when I was 14, and have enjoyed learning and using various technologies throughout my journey.</p>
                    <p className={styles.text}>I've also worked on projects for clients and tutored others on programming concepts.</p>

                </div>

                <div id="skills" className={styles.section}>

                    <h2 className={styles.title}><span>&lt;</span>Skills <span>/&gt;</span></h2>

                    <div className={styles.skills}>
                        {skills.map(s => (
                            <div className={styles.skill}>

                                <div className={styles.item_title}>
                                    <img className={styles.item_icon} src={`/assets/${s.icon}.svg`} />
                                    <p className={styles.item_name}>{s.name}</p>
                                </div>

                                <div className={styles.skill_amount}>
                                    <div className={styles.skill_amount_fill} style={{ width: `${s.amount}%` }} />
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

                <div id="projects" className={styles.section}>

                    <h2 className={styles.title}>Projects</h2>

                    <div>
                        {projects.map(p => (
                            <div className={styles.project}>

                                <div className={styles.item_title}>
                                    <img className={styles.item_icon} src={`/assets/${p.icon}.svg`} />
                                    <p className={styles.item_name}>{p.name}</p>
                                </div>

                                <p className={styles.project_description}>{p.description}</p>

                                <a className={styles.project_button} href={p.link} target="_blank">View Project</a>

                            </div>
                        )).reduce((prev, acc) => [prev, <div className={styles.divider} />, acc])}
                    </div>

                </div>

            </ContentWrapper>

        </div>
    );
}