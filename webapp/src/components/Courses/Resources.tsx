import React, { Component } from "react";
import Link from "@docusaurus/Link";
import styles from "../../css/index.module.css"

export default class CoursesScoreboard extends Component<{}, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="container">
                    <h1 className="text--center margin--lg">Teaching Resources</h1>
                    <p className="text--center">This content is currently not available at this moment. Please enjoy some other amazing services at
                        this page.
                    </p>
                </div>
                <div className={styles.buttons}>
                    <Link className="text--center button button--primary button--md margin-vert--md" to="../">Back to Home 🏡</Link>
                </div>
            </>
        )
    }
}