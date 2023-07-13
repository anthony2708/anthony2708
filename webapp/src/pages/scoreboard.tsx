import React, { Component } from "react";
import Layout from "@theme/Layout";
// import axios from "axios";
// import clsx from "clsx";
import styles from "../css/index.module.css";
// import custom from "../css/YoutubeFeatures.module.css";
// import ScoreboardFeatures from "../components/ScoreboardFeatures";

export default class Scoreboard extends Component<{}, { sbd: string, data: any }> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = { sbd: "", data: "" };
    }

    // handleChange(event: { target: { value: any } }) {
    //     this.setState({ sbd: event.target.value });
    // }

    // async handleSubmit(event: { preventDefault: () => void }) {
    //     event.preventDefault();
    //     try {
    //         const res = await axios.get("https://vtvapi3.vtv.vn/handlers/timdiemthi.ashx",
    //             {
    //                 params: { keywords: this.state.sbd },
    //                 headers: { "Access-Control-Allow-Origin": "https://vtv.vn" }
    //             })
    //         this.setState({ data: res.data });
    //     } catch (error) {
    //         // this.setState({ data: error.response.data });
    //         console.log(error);
    //     }
    // }

    render() {
        return (
            <Layout title={`Scoreboard`} description="Tra cứu điểm thi tốt nghiệp THPT 2023">
                {/* Header */}
                {/* <header className={clsx("hero hero--primary", styles.heroBanner)}>
                    <div className="container">
                        <h1 className="hero__title">Scoreboard Check</h1>
                        <p className="hero__subtitle">Tra cứu điểm thi Tốt nghiệp THPT 2023 (Vietnamese only)</p>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <label>
                                <input className={custom.url} type="text"
                                    placeholder="Nhập mã số báo danh"
                                    name="sbd" value={this.state.sbd}
                                    onChange={this.handleChange.bind(this)} required />
                            </label>
                            <div className={styles.buttons}>
                                <input className="button button--secondary button--lg" type="submit"
                                    value="🔍 Tra cứu" />
                            </div>
                        </form>
                    </div>
                </header> */}
                {/* End of Header */}
                <main className={styles.scoreboard}>
                    <div className="container">
                        {/* <ScoreboardFeatures data={this.state.data} sbd={this.state.sbd} /> */}
                        <iframe src="https://diemthi.tuyensinh247.com/tracuu/diem2023" width="100%" height={360}
                            loading="lazy"></iframe>
                    </div>
                </main>
            </Layout >
        );
    }
}