import { Component } from "react";
import Translate, { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "../../css/index.module.css";
import GalleryFeatures from "../../components/Services/GalleryFeatures";

export default class Gallery extends Component<{}, {}> {
    render() {
        return (
            <Layout title={`Images Gallery`}
                description={translate({
                    id: 'gallery.desc',
                    message: 'Kho lưu trữ ảnh'
                })}>
                {/* Header */}
                <header className={clsx("hero hero--primary", styles.heroBanner)}>
                    <div className="container">
                        <h1 className="hero__title">
                            <Translate id="gallery.title">Kho lưu trữ ảnh từ VNUHCM-ITUS</Translate>
                        </h1>
                    </div>
                </header>
                {/* End of Header */}
                <main>
                    <div className="container">
                        <GalleryFeatures />
                    </div>
                </main>
            </Layout>
        );
    }
}