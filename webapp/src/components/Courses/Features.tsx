import React, { Component } from "react";
import custom from "../../css/YoutubeFeatures.module.css";

export default class CoursesFeatures extends Component<{}, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Resources</h1>
                <p>
                    <b>This content is currently not available at this moment. Please come back later. Thank you!
                    </b>
                </p>
            </>
        );
    }
}