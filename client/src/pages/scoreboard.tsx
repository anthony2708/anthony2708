import React, { Component } from "react";
import Layout from "@theme/Layout";
import axios from "axios";
import clsx from "clsx";
import styles from "../css/index.module.css";
import custom from "../css/YoutubeFeatures.module.css";
import ScoreboardFeatures from "../components/ScoreboardFeatures";
import Link from "@docusaurus/Link";

export default class Scoreboard extends Component<{}, { sbd: string, data: any }> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = { sbd: "", data: "" };
    }

    handleChange(event: { target: { value: any } }) {
        this.setState({ sbd: event.target.value });
    }

    async handleSubmit(event: { preventDefault: () => void }) {
        event.preventDefault();
        try {
            const res = await axios.post("https://diemthi.tuoitre.vn/csv-thpt-score",
                {
                    data: this.state.sbd
                })
            this.setState({ data: res.data });
        } catch (error) {
            this.setState({ data: error.response.data });
        }
    }

    render() {
        return (
            <Layout title={`Scoreboard Review`} description="Tra cứu điểm thi tốt nghiệp THPT 2023">
                {/* Header */}
                <header className={clsx("hero hero--primary", styles.heroBanner)}>
                    <div className="container">
                        <h1 className="hero__title">Scoreboard Review</h1>
                        <p className="hero__subtitle">Tra cứu điểm thi Tốt nghiệp THPT 2023 (Vietnamese only)</p>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <label>
                                <input className={custom.url} type="text"
                                    placeholder="Nhập mã số báo danh" minLength={8}
                                    maxLength={8} name="sbd" value={this.state.sbd}
                                    onChange={this.handleChange.bind(this)} required />
                            </label>
                            <div className={styles.buttons}>
                                <input className="button button--secondary button--lg" type="submit"
                                    value="🔍 Tra cứu" />
                            </div>
                        </form>
                    </div>
                </header>
                {/* End of Header */}
                <main>
                    <div className="container">
                        <ScoreboardFeatures data={this.state.data} sbd={this.state.sbd} />
                    </div>
                    <div className="container">
                        <p>Mã môn Ngoại ngữ kỳ thi Tốt nghiệp THPT 2023:</p>
                        <ul>
                            <li><b>N1</b>: Tiếng Anh</li>
                            <li><b>N2</b>: Tiếng Nga</li>
                            <li><b>N3</b>: Tiếng Pháp</li>
                            <li><b>N4</b>: Tiếng Trung Quốc</li>
                            <li><b>N5</b>: Tiếng Đức</li>
                            <li><b>N6</b>: Tiếng Nhật</li>
                            <li><b>N7</b>: Tiếng Hàn</li>
                        </ul>
                    </div>
                    <div className={clsx("container", custom.point)}>
                        <Link className="button button--primary button--md"
                            href="https://github.com/anthony2708/anthony2708/blob/main/assets/THPTQG/score_analysis_2023.ipynb"
                            hrefLang="en">Xem phân tích phổ điểm 📊</Link>
                    </div>
                </main>
            </Layout >
        );
    }
}