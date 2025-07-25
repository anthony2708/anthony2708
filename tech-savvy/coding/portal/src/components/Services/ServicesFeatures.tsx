import useBaseUrl from '@docusaurus/useBaseUrl';
// import React from 'react';
import clsx from 'clsx';
import styles from '../../css/HomepageFeatures.module.css';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

type FeatureItem = {
    title: string;
    image: string;
    description: JSX.Element;
    link: string;
};


const FeatureList: FeatureItem[] = [
    {
        title: "URL Shortener",
        image: "/img/english/url_logo.jpg",
        description: (
            <Translate id='services.feature1.desc'>
                Dịch vụ rút gọn URL, giúp chia sẻ đường dẫn với người khác.
            </Translate>
        ),
        link: "/services/url"
    },
    {
        title: "English L&T",
        image: "img/english/english_logo.jpg",
        description: (
            <Translate id='services.feature2.desc'>
                Dịch vụ dạy và học tiếng Anh trực tuyến, phục vụ nhu cầu của
                giáo viên và học viên.
            </Translate>
        ),
        link: "https://www.builetuananh.name.vn/services/english"
    },
    {
        title: "Images Gallery",
        image: "img/english/gallery.jpg",
        description: (
            <Translate id='services.feature3.desc'>
                Dịch vụ lưu trữ ảnh trực tuyến, giúp bạn dễ dàng lưu trữ những tấm ảnh tuyệt đẹp.
            </Translate>
        ),
        link: "/services/gallery"
    }
]

function Feature({ title, image, description, link }: FeatureItem) {
    return (
        <div className={clsx('col col--4 margin-vert--md')}>
            <div className="text--center">
                <img
                    className={styles.featureSvg}
                    alt={title}
                    src={useBaseUrl(image)}
                />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link className="button button--primary button--md "
                    href={link}>
                    <Translate id='services.access'>
                        Truy cập
                    </Translate>
                </Link>
            </div>
        </div>
    );
}

export default function ServicesFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    )
}