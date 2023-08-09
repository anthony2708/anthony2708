import React, { Component } from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "../../css/index.module.css";
import ServicesFeatures from "../../components/Services/ServicesFeatures";

export default class Services extends Component<{}, {}> {
    render() {
        return (
            <Layout title={`Services Portal`} description="Cổng dịch vụ tích hợp">
                {/* Header */}
                <header className={clsx("hero hero--primary", styles.heroBanner)}>
                    <div className="container">
                        <h1 className="hero__title">Services Portal</h1>
                        <p className="hero__subtitle">Cổng dịch vụ tích hợp (Vietnamese only)</p>
                    </div>
                </header>
                {/* End of Header */}
                <main>
                    <div className="container">
                        <ServicesFeatures />
                    </div>
                </main>
            </Layout >
        );
    }
}